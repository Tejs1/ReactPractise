import React from "react";

const ApprovalCard = ({ children }) => {
  return (
    <div>
      <div className="ui card">
        <div className="content">
          {children}
          {/* <img
            src="/images/avatar/large/jenny.jpg"
            class="ui mini right floated image"
          />
          <div class="header">Jenny Lawrence</div>
          <div class="meta">New User</div>
          <div class="description"></div> */}
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <button className="ui green basic button">Approve</button>
            <button className="ui red basic button">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
