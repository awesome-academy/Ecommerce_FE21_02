import React from "react";
import galleryItemImage from "images/gallery/gallery_image_1.png";
const GalleryItem = () => {
  return (
    <div className="gallery__item">
      <img
        className="gallery__image"
        src={galleryItemImage}
        alt="wine gallery"
      />
      <div className="image-overlay">
        <div className="image-overlay__line-box">
          <p className="image-overlay__title">
            <span className="image-overlay__title--sub">1987 </span>
            <span className="image-overlay__title--main">Rượu </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
