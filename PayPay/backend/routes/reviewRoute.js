const Post = require("../models/Post");
const auth = require("../middleware/Auth");

module.exports = function (app) {
  //  get all posts

  app.post("/review/assign", (req, res) => {
    async function assignToReview() {}
    assignToReview()
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.log(err));
  });
};
