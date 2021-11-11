import React from "react";
import faker from "faker";

const CommentDetails = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={props.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="/">
          {props.author}
        </a>
        <div className="metadata">
          <div className="date">{`${faker.datatype.datetime()}`}</div>
        </div>

        <div className="text">{props.text}</div>
        {/* <div className="text">{faker.company.catchPhrase()}</div> */}
      </div>
    </div>
  );
};

export default CommentDetails;
