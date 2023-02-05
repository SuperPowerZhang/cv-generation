import React from "react";
import BasicInfo from "./forms/BasicInfo";
import "./form.css";

type ContentType = {
  state: string;
  setState: () => void;
};

function Form(props: ContentType) {
  const { state, setState } = props;
  return (
    <>
      <BasicInfo state={state} setState={setState} />
    </>
  );
}

export default Form;
