import React from "react";
import { Children } from "react";

const ApprovalCard = ({ children }) => {
  return (
    <div>
      <div class="ui card">
        <div class="content">
          {children}
          {/* <img
            src="/images/avatar/large/jenny.jpg"
            class="ui mini right floated image"
          />
          <div class="header">Jenny Lawrence</div>
          <div class="meta">New User</div>
          <div class="description"></div> */}
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button">Approve</button>
            <button class="ui red basic button">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
