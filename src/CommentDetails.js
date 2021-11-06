import React from "react";
import faker from "faker";

const CommentDetails = () => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={faker.image.avatar()} alt="" />
      </a>
      <div className="content">
        <a className="author" href="/">
          {faker.internet.userName()}
        </a>
        <div className="metadata">
          <div className="date">{`${faker.datatype.datetime()}`}</div>
        </div>
        <div className="text">{faker.company.catchPhrase()}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
