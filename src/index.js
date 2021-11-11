//import
import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";

//create
const App = () => {
  return (
    <div className="ui comments">
      <CommentDetails
        author="ayush"
        text="snehal didi"
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="tapasvi"
        text="yedi"
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="soham"
        text="nahiye"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

//render
ReactDom.render(<App />, document.querySelector("#root"));
