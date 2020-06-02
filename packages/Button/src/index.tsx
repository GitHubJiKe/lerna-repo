import React from "react";
import "bulma/css/bulma.css";

interface IButtonProps {
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  type?: "danger" | "primary" | "link" | "info" | "success" | "warning";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const className = props.type ? `button is-${props.type}` : "button";

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.disabled) {
      return;
    }
    props.onClick && props.onClick(e);
  };

  return (
    <button className={className} onClick={onClick} disabled={props.disabled}>
      {props.children || "Button"}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => alert("I am Button"),
  disabled: false,
};

export default Button;
