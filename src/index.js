//import
import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

//create

const App = () => {
  return (
    <div className="ui comments">
      <ApprovalCard>
        {" "}
        <CommentDetails
          author="ayush"
          text="snehal didi"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="tapasvi"
          text="yedi"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="soham"
          text="nahiye"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

//render
ReactDom.render(<App />, document.querySelector("#root"));
