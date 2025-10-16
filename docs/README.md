# Neighborhood Bike Exchange Prototype

## MVP Features
- Create and publish bicycle listings with title, description, price, and local area details.
- Upload a main photo with live preview before publishing.
- View published listings on a local feed with the title, price, and main photo.

## Edge Cases
- Prevent non-image uploads or photos larger than 5 MB and surface inline feedback.
- Restore the placeholder preview whenever the selected photo is removed or reset.
- Guard against empty listing submissions via required form fields.

## Success Metrics
- A tester can publish a bicycle listing with a photo in under one minute.
- Published listings display immediately on the local feed with accurate pricing and imagery.
- Validation feedback keeps testers on the happy path without resorting to alerts or console errors.
