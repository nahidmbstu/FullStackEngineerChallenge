const Post = require("../models/Post");
const auth = require("../middleware/Auth");

module.exports = function (app) {
  //  get all posts

  app.get("/posts", (req, res) => {
    // res.send(req.query); // get all query like  ?name=nahid
    async function getPosts() {
      const result = await Post.find({});
      return result;
    }

    getPosts()
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.log(err));
  });

  // get Post by Category

  // app.get("/post/:category", (req, res) => {
  //   // res.send(req.params);

  //   async function getPostByIdAndCategory() {
  //     const result = await Post.find({ category: req.params.category });
  //     return result;
  //   }

  //   getPostByIdAndCategory()
  //     .then(result => {
  //       console.log(result);
  //       res.send(result);
  //     })
  //     .catch(err => console.log(err));
  // });

  // // create a post object and save it

  function validatePost(req, res, next) {
    if (!req.body.name) {
      return res.send(500, "Need a Employee name");
    }
    if (!req.body.reviewer) {
      return res.send(500, "Need a author");
    }
    if (!req.body.review_details) {
      return res.send(500, "Need a Post body");
    }

    if (!req.body.submited) {
      return res.send(500, "Need a Submission Status");
    }

    next();
  }

  app.post("/post/new", validatePost, (req, res) => {
    async function createPost() {
      console.log(req.body);
      const singlePost = new Post({
        emp_name: req.body.name,
        reviewer: req.body.reviewer,
        review_details: req.body.review_details,
        submited: req.body.submited,
      });
      const result = await singlePost.save();
      console.log(result);
      return result;
    }
    createPost()
      .then((result) => {
        console.log(result);
        res.status(201).send(result);
      })
      .catch((err) => console.log(err));
  });
};
