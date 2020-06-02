import React from "react";
import "bulma/css/bulma.css";

interface IButtonProps {
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  type?: "danger" | "primary" | "link" | "info" | "success" | "warning";
}

const Button: React.FC<IButtonProps> = (props) => {
  const className = props.type ? `button is-${props.type}` : "button";

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.onClick && props.onClick(e);
  };

  return (
    <button className={className} onClick={onClick}>
      {props.children || "Button"}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => alert("I am Button"),
};

export default Button;
