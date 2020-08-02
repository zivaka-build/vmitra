/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="pr-2">
          <div className="social-icons d-flex flex-row-reverse">
            <div className="pr-2">
              <a href="https://www.facebook.com/vibhamitra" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-facebook-square" />
              </a>
            </div>
            <div className="pr-2">
              <a href="https://www.instagram.com/vibha.mitra/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-instagram-square" />
              </a>
            </div>
            <div className="pr-2">
              <a href="https://wa.me/919830933434" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-whatsapp-square" />
              </a>
            </div>
            <div className="pr-2">
              <a href="mailto:vibhamitra@gmail.com" rel="noopener noreferrer" target="_blank">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
