const TokenGenerator = require("uuid-token-generator");
const User = require("../models/User");
const auth = require("../middleware/Auth");

module.exports = function (app) {
  // app.post("/auth/register", (req, res) => {
  //   const tokgen = new TokenGenerator(); // Default is a 128-bit token encoded in base58
  //   let access_token = tokgen.generate();

  //   async function createUser() {
  //     const user = await User.find({
  //       email: req.body.email,
  //     });

  //     console.log(user);

  //     if (user.length > 0) {
  //       return res.send(" Email Already Registered ").status(200);
  //     }

  //     const singleUser = new User({
  //       name: req.body.name,
  //       email: req.body.email,
  //       phone: req.body.phone,
  //       password: req.body.password,
  //       access_token: access_token,
  //       isStaff: false,
  //     });

  //     const result = await singleUser.save();
  //     return result;
  //   }

  //   // create user

  //   createUser()
  //     .then((result) => {
  //       res.send(" User Successfully Registered ");
  //     })
  //     .catch((err) => console.log(err));
  // });

  // app.post("/auth/login", (req, res) => {
  //   async function LoginUser() {
  //     // find user

  //     const user = await User.find({
  //       email: req.body.email,
  //       password: req.body.password,
  //     });

  //     console.log(user);
  //     // if not found return no access.

  //     if (user.length < 1) {
  //       return res.send(" No Registered User ").status(401);
  //     }

  //     if (
  //       user[0].email != req.body.email &&
  //       user[0].password != req.body.password
  //     ) {
  //       return res.send(" Invalid Email or Password ").status(401);
  //     } else {
  //       return user;
  //     }
  //   }

  //   LoginUser()
  //     .then((result) => {
  //       console.log(result);
  //       res.send(result).status(200);
  //     })
  //     .catch((err) => console.log(err));
  // });

  // get all the employee list

  app.get("/employees", (req, res) => {
    // res.send(req.query); // get all query like  ?name=nahid
    async function getUsers() {
      const result = await User.find({});
      return result;
    }

    getUsers()
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      })
      .catch((err) => console.log(err));
  });

  // util functions

  function validateUser(req, res, next) {
    if (!req.body.name) {
      return res.send(500, "Need a Employee name");
    }
    if (!req.body.designation) {
      return res.send(500, "Need a designation");
    }

    next();
  }

  // create new User

  app.post("/employees/new", validateUser, (req, res) => {
    async function createPost() {
      console.log(req.body);
      const singleUser = new User({
        name: req.body.name,
        designation: req.body.designation,
      });
      const result = await singleUser.save();
      console.log(result);
      return result;
    }
    createPost()
      .then((result) => {
        console.log(result);
        res.send(200, result);
      })
      .catch((err) => console.log(err));
  });
};
