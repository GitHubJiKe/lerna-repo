import React from "react";
import Modal from ".";
import Button from "../../Button/src";

export default () => {
  return (
    <div>
      <Button
        onClick={() =>
          Modal.open({ component: <h1 style={{ color: "white" }}>AAAAA</h1> })
        }
      >
        Open
      </Button>
      <Button onClick={() => Modal.close()}>Close</Button>
    </div>
  );
};
