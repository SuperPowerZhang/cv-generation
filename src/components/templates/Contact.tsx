import React, { useState, useContext } from "react";
import { InfoContext } from "../context";

function ContextTemplate() {
  const info = useContext(InfoContext);
  return (
    <header className='contact'>
      <li>
        <span>手机/微信：</span>
        <a href={`tel:${info?.contact?.mobile}`}>{info?.contact?.mobile}</a>
      </li>
      <li>
        <span>邮箱：</span>
        <a href={info.contact?.mail}>{info?.contact?.mail}</a>
      </li>
    </header>
  );
}

export default ContextTemplate;
