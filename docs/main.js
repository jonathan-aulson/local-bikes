(() => {
  const form = document.getElementById('listing-form');
  const photoInput = document.getElementById('photo');
  const photoPreview = document.getElementById('photo-preview');
  const listingsContainer = document.getElementById('listings');
  const emptyState = document.getElementById('empty-state');

  const listings = [];
  let previewDataUrl = '';

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  });

  renderPreviewPlaceholder();
  renderListings();
  if (form.elements.title) {
    form.elements.title.focus();
  }

  photoInput.addEventListener('change', handlePhotoChange);
  form.addEventListener('submit', handleSubmit);

  function handlePhotoChange() {
    const file = photoInput.files && photoInput.files[0];

    if (!file) {
      previewDataUrl = '';
      renderPreviewPlaceholder();
      return;
    }

    if (!file.type.startsWith('image/')) {
      previewDataUrl = '';
      renderPreviewError('Please choose an image file (JPEG, PNG, or GIF).');
      photoInput.value = '';
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      previewDataUrl = '';
      renderPreviewError('That file is too large. Please choose a photo under 5 MB.');
      photoInput.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      previewDataUrl = reader.result;
      renderPreviewImage(previewDataUrl, file.name);
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const area = formData.get('area').trim();
    const priceValue = parseFloat(formData.get('price'));

    const file = photoInput.files && photoInput.files[0];
    if (!file) {
      renderPreviewError('Please add a main photo before publishing.');
      photoInput.focus();
      return;
    }

    if (!file.type.startsWith('image/')) {
      previewDataUrl = '';
      renderPreviewError('Please choose an image file (JPEG, PNG, or GIF).');
      photoInput.value = '';
      photoInput.focus();
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      previewDataUrl = '';
      renderPreviewError('That file is too large. Please choose a photo under 5 MB.');
      photoInput.value = '';
      photoInput.focus();
      return;
    }

    if (!title || !area || !description || !Number.isFinite(priceValue) || priceValue < 0) {
      // Built-in browser validation should prevent this, but we guard just in case.
      return;
    }

    getFileDataUrl(file)
      .then((dataUrl) => {
        previewDataUrl = dataUrl;
        const listing = {
          id: Date.now(),
          title,
          description,
          area,
          price: priceValue,
          photo: dataUrl,
          publishedAt: new Date()
        };
        listings.unshift(listing);
        renderListings();
        resetForm();
      })
      .catch(() => {
        renderPreviewError('Something went wrong while reading the photo. Please try again.');
      });
  }

  function getFileDataUrl(file) {
    if (previewDataUrl) {
      return Promise.resolve(previewDataUrl);
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error('Unable to read file.'));
      reader.readAsDataURL(file);
    });
  }

  function renderListings() {
    listingsContainer.replaceChildren();

    if (!listings.length) {
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;

    listings.forEach((listing) => {
      const card = document.createElement('article');
      card.className = 'listing-card';

      const img = document.createElement('img');
      img.src = listing.photo;
      img.alt = `${listing.title} - main photo`;
      img.className = 'listing-photo';
      card.append(img);

      const body = document.createElement('div');
      body.className = 'listing-body';

      const titleEl = document.createElement('h3');
      titleEl.className = 'listing-title';
      titleEl.textContent = listing.title;
      body.append(titleEl);

      const priceEl = document.createElement('p');
      priceEl.className = 'listing-price';
      priceEl.textContent = currencyFormatter.format(listing.price);
      body.append(priceEl);

      const areaEl = document.createElement('p');
      areaEl.className = 'listing-area';
      areaEl.textContent = listing.area;
      body.append(areaEl);

      if (listing.description) {
        const descriptionEl = document.createElement('p');
        descriptionEl.className = 'listing-description';
        descriptionEl.textContent = truncate(listing.description, 140);
        body.append(descriptionEl);
      }

      card.append(body);
      listingsContainer.append(card);
    });
  }

  function truncate(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength - 1).trimEnd()}…`;
  }

  function renderPreviewPlaceholder() {
    photoPreview.replaceChildren();
    const span = document.createElement('span');
    span.className = 'placeholder';
    span.textContent = 'Photo preview will appear here.';
    photoPreview.append(span);
  }

  function renderPreviewError(message) {
    photoPreview.replaceChildren();
    const p = document.createElement('p');
    p.className = 'error';
    p.textContent = message;
    photoPreview.append(p);
  }

  function renderPreviewImage(src, fileName) {
    photoPreview.replaceChildren();
    const img = document.createElement('img');
    img.src = src;
    img.alt = fileName ? `Preview of ${fileName}` : 'Preview of selected bicycle photo';
    img.className = 'preview-image';
    photoPreview.append(img);
  }

  function resetForm() {
    form.reset();
    previewDataUrl = '';
    renderPreviewPlaceholder();
    if (form.elements.title) {
      form.elements.title.focus();
    }
  }
})();
