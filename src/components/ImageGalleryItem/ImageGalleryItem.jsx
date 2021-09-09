import React, { Component } from "react";

import "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags, handleOpenModal } = this.props;

    return (
      <li onClick={() => handleOpenModal(id)}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
