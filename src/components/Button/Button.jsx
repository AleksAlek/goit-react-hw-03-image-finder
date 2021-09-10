import React, { Component } from "react";

import s from "./Button.module.css";

class Button extends Component {
  state = {
    oneMorePage: 1,
  };

  handleOneMorePage = () => {
    const { oneMorePage } = this.state;
    const { loadMoreImages } = this.props;

    const updatedPageNumber = oneMorePage + 1;

    loadMoreImages(updatedPageNumber);

    this.setState({ oneMorePage: updatedPageNumber });
  };

  render() {
    const { handleOneMorePage } = this;

    return (
      <button className={s.button} type="button" onClick={handleOneMorePage}>
        Load More
      </button>
    );
  }
}

export default Button;
