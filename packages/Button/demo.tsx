import React from "react";
import Button from "./src";

export default () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Button>normal</Button>
      <Button type="danger">danger</Button>
      <Button type="info">normal</Button>
      <Button type="link">link</Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
    </div>
  );
};
