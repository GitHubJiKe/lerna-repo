import React from "react";

interface IButtonProps {
  text: string;
  onClick(): void;
}

export default function Button(props: IButtonProps) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

Button.defaultProps = {
  text: "Button",
  onClick: () => alert("I am Button"),
};
