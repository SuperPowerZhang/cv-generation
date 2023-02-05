import React from "react";

type ContentType = {
  state: string;
  setState: () => void;
};

function Content(props: ContentType) {
  const { state } = props;
  return (
    <>
      <div>{state}</div>
    </>
  );
}

export default Content;
