import React from "react";
import { Button, Space } from "antd";
import { displayFormType } from "../App";

type PropsType = {
  isShowForm: displayFormType;
  showForm: () => void;
  hideForm: () => void;
};
function Footer(props: PropsType) {
  const { isShowForm, showForm, hideForm } = props;
  return (
    <>
      <Space size='small'>
        <Button>清除</Button>
        {isShowForm ? (
          <Button
            type='primary'
            onClick={() => {
              hideForm();
            }}
          >
            预览全文
          </Button>
        ) : (
          <Button
            type='primary'
            onClick={() => {
              showForm();
            }}
          >
            继续修改
          </Button>
        )}
        <Button type='primary'>提交</Button>
      </Space>
    </>
  );
}

export default Footer;
