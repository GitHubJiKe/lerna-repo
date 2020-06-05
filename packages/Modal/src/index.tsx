import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";

interface IModalProps {
  component?: React.ReactNode;
  render?: () => React.ReactNode;
  maskClose?: boolean;
}

class Modal {
  static open({ component, render, maskClose }: IModalProps) {
    const container = document.createElement("div");
    container.id = "modal-root";
    document.body.appendChild(container);
    ReactDOM.render(
      <div className="modal is-active" style={{ zIndex: 999 }}>
        <div
          className="modal-background"
          style={{ zIndex: 999 }}
          onClick={maskClose ? Modal.close : undefined}
        ></div>
        <div className="modal-content" style={{ zIndex: 1000 }}>
          {component || (render && render())}
        </div>
        <button
          className="modal-close is-large"
          style={{ zIndex: 999 }}
          aria-label="close"
          onClick={Modal.close}
        ></button>
      </div>,
      container
    );
  }

  static close() {
    const container = document.getElementById("modal-root");
    container?.parentNode?.removeChild(container);
  }
}
export default Modal;
