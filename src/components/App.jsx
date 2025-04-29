import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";
import Header from "./Header";  

console.log(blogData);

function App() {
  return (
    <div className="App">
            <Header name={blogData.name} />
      <h1>{blogData.name}</h1>
      <About about={blogData.about} image={blogData.image} alt="blog logo" />
      <ArticleList posts={blogData.posts} />
      <Article posts={blogData.posts} />
    </div>
  );
}

export default App;