import React from "react";
import "bulma/css/bulma.css";

interface IButtonProps {
  onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
  type?: "danger" | "primary" | "link" | "info" | "success" | "warning";
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  inverted?: boolean;
  outlined?: boolean;
  fullwidth?: boolean;
  href?: string;
  size?: "normal" | "small" | "medium" | "large";
}

const Button: React.FC<IButtonProps> = (props) => {
  let className = props.type ? `button is-${props.type}` : "button";

  if (props.loading) {
    className = `${className} is-loading`;
  }

  if (props.rounded) {
    className = `${className} is-rounded`;
  }

  if (props.inverted) {
    className = `${className} is-inverted`;
  }

  if (props.outlined) {
    className = `${className} is-outlined`;
  }

  if (props.size) {
    className = `${className} is-${props.size}`;
  }

  if (props.fullwidth) {
    className = `${className} is-fullwidth`;
  }

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (props.type !== "link") {
      e.preventDefault();
    }

    if (props.disabled) {
      return;
    }

    props.onClick && props.onClick(e);
  };

  if (props.type === "link") {
    return (
      <a className={className} onClick={onClick} href={props.href}>
        {props.children || "Button"}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={props.disabled}>
      {props.children || "Button"}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  rounded: false,
  inverted: false,
  outlined: false,
  fullwidth: false,
};

export default Button;
