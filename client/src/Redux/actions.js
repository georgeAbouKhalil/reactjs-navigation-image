export const FetchImages = "FetchImages";

export const fetchPhotos = (photos) => ({
  type: FetchImages,
  payload: photos,
});