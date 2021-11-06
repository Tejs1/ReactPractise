//import
import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./CommentDetails";

//create
const App = () => {
  return (
    <div className="ui comments">
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
    </div>
  );
};

//render
ReactDom.render(<App />, document.querySelector("#root"));
