//import
import react from "react";
import reactDom from "react-dom";

//create
const App = () => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src="" alt="" />
        </a>
        <div className="content">
          <a className="author">Stevie Feliciano</a>
          <div className="metadata">
            <div className="date">2 days ago</div>
          </div>
          <div className="text">
            Hey guys, I hope this example comment is helping you read this
            documentation.
          </div>
        </div>
      </div>
    </div>
  );
};

//render
reactDom.render(<App />, document.querySelector("#root"));
