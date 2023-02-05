import React, { useState } from "react";
import { InfoContext } from "../../App";

function ContextTemplate() {
  return (
    <InfoContext.Consumer>
      {(info) => (
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
      )}
    </InfoContext.Consumer>
  );
}

export default ContextTemplate;
