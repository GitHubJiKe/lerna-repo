import React from "react";
import Button from ".";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button>normal</Button>
        <Button type="danger">danger</Button>
        <Button type="info">normal</Button>
        <Button type="link">link</Button>
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="warning">warning</Button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button rounded>rounded</Button>
        <Button size="small">small</Button>
        <Button size="normal">normal</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button rounded type="link" href="https://www.baidu.com" fullwidth>
          rounded link
        </Button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button rounded type="link" href="https://www.baidu.com" loading>
          rounded link
        </Button>
        <Button rounded type="link" href="https://www.baidu.com" inverted>
          inverted rounded link
        </Button>
        <Button rounded type="link" href="https://www.baidu.com" outlined>
          outlined rounded link
        </Button>
      </div>
    </div>
  );
};
