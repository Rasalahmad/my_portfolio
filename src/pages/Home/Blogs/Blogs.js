import { Grid, Box } from "@mui/material";
import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = [
    {
      id: "10001",
      title: "CLOSURE IN JAVASCRIPT",
      desc: "In this blog, you can understand closure in javascript which is one of the important concepts in JavaScript. Though it was discussed widely, it is still a confusing concept. Let’s understand about closure.Closure means that access to an outer function scope from an inner function. That means an inner function can access variables and parameters of an outer function.",
      img: "https://media-exp1.licdn.com/dms/image/C5612AQEZdFkOw3kg0w/article-cover_image-shrink_720_1280/0/1642779807940?e=2147483647&v=beta&t=reiNV1fptQ-xGB2ZlhlvmvtHqcorjHpgVvyQuPK9Z8E",
      link: "https://www.linkedin.com/pulse/closure-javascript-rasel-ahmad",
    },
    {
      id: "10002",
      title: "Document Object Model",
      desc: "This blog is about the most important for the web that is DOM (Document Object Model). A Document object represents the HTML document that is displayed in that window. More simply, a document object represents the whole HTML document. When we run an HTML document on the web and the document is loaded in the browser it becomes a document object. ",
      img: "https://media-exp1.licdn.com/dms/image/C5612AQG-JfOxBCANOg/article-cover_image-shrink_720_1280/0/1642613533945?e=2147483647&v=beta&t=CKLbrDSluWeaPwYsZ5dqnEh3UNczsIn6SId_zL-TFes",
      link: "https://www.linkedin.com/pulse/do-rasel-ahmad",
    },
    {
      id: "100003",
      title: "CSS POSITION",
      desc: "This blog is about the most confusing part of CSS for most beginner CSS learners. Basically, the CSS position property defines where the contents or position of the content will be placed in an element. More specifically CSS position property sets how an element positions on our document. The position top, bottom, left, and right properties define the final location of the positioned element. ",
      img: "https://media-exp1.licdn.com/dms/image/C5612AQFrVM9u2oDNJw/article-cover_image-shrink_720_1280/0/1640711540566?e=2147483647&v=beta&t=s4NjwkM0j3YPn0aX2P4zHe2Q7-2r_PZyoUFUr-xBeyE",
      link: "https://www.linkedin.com/pulse/css-position-rasel-ahmad",
    },
  ];

  return (
    <Box sx={{ width: "90%", m: "auto" }} className="text-center">
      <h1 style={{ margin: "100px 0" }}>BLOGS</h1>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </Grid>
    </Box>
  );
};

export default Blogs;
