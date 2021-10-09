const express = require("express");
const authorsRouter = express.Router();

function router(nav) {
  var authors = [
    {
      title: "John Bunyan",
      author: "Famous Work: The Pilgrim's Progress",
      genre: "Allegory",
      img: "a1.jpg",
    },
    {
      title: "Chetan Bhagat",
      author: "2 states",
      genre: "fiction",
      img: "a2.jpg",
    },
    {
      title: "Robin Sharma",
      author: "The 5 AM Club",
      genre: "self help book",
      img: "a3.jpg",
    },
    // {
    //   title: "John Bunyan",
    //   author: "Famous Work: The Pilgrim's Progress",
    //   genre: "Allegory",
    //   img: "John Bunyan.jpg",
    // },
  ];
  authorsRouter.get("/", function (req, res) {
    res.render("authors", {
      nav,
      title: "Authors:Library",
      authors,
    });
  });

  authorsRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("author", {
      nav,
      title: "Single Author",
      author: authors[id],
    });
  });

  return authorsRouter;
}

module.exports = router;