import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
<Header topic={blogData.name}/>
<About link={blogData.image} text={blogData.about}/>
<ArticleList blogData={blogData.posts}/>
    </div>
  );
}

export default App;
