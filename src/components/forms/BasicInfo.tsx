import React from "react";
import { Input } from "antd";
import { BASIC_INFO } from "../../constants/INFO";

type ContentType = {
  state: string;
  setState: () => void;
};

function BasicInfo(props: ContentType) {
  const { state, setState } = props;
  const basicForm = BASIC_INFO.map((item) => {
    return (
      <div key={item} className='item-wrap'>
        <span className='tag'>{item}:</span>
        <Input
          type='primary'
          onInput={(e) => {
            setState(e.target.value);
          }}
        ></Input>
      </div>
    );
  });
  return <>{basicForm}</>;
}

export default BasicInfo;
