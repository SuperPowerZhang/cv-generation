import React from "react";
import BasicInfo from "./forms/BasicInfo";
import { InfoType } from "../App";
import "./form.css";

type ContentType = {
  state: InfoType;
  setState: React.Dispatch<React.SetStateAction<InfoType>>;
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
