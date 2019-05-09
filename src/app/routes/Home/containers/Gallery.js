import React, { Component } from "react";
import GalleryItem from "../components/GalleryItem";

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </section>
    );
  }
}

export default Gallery;
