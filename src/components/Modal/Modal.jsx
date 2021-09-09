import React, { Component } from "react";

class Modal extends Component {
  handleClickOnOverlay = (e) => {
    const { handleCLoseModal } = this.props;

    if (e.target.className === "Overlay") {
      handleCLoseModal();
    }
  };

  render() {
    const { handleClickOnOverlay, props } = this;
    const { largeImageURL, tags } = props;

    return (
      <div className="Overlay" onClick={handleClickOnOverlay}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
