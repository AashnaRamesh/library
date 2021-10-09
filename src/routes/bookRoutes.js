const express = require("express");

const booksRouter = express.Router();

function router(nav) {
  var books = [
    {
      title: "One Indian girl",
      author: " Chetan Bhagat",
      genre: "Fiction",
      img: "1.jpg",
      des: "The book is about a girl name Radhika Mehta, who is a worker at the Distressed Debt group of Goldman Sachs, the investment bank.. ",
      dat:"October 1, 2016",
    },

    
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "novel",
      img: "2.jpg",
      des: "An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
      dat:"1988",
    },

    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "novel",
        img: "3.jpg",
        des: "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed. It is about the power of reading, the price of betrayal, and the possibility of redemption.",
        dat:"29 May 2003",
      },
    
  ];

  var books2 = [
    {
      title: "Ikigai",
      author: "Hector Garcia, Francesc Miralles",
      genre: "Self-help book",
      img: "4.jpg",
      des: "The Japanese term “ikigai” or the “art of living” refers to the practice of living a purposeful life with respect to a person’s sense of the self.",
      dat:"April 2016",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      author: "	Robin Sharma",
      genre:  "Fiction",
      img: "5.png",
      des: "The book is a business fable derived from Sharma's personal experiences after leaving his career as a litigation lawyer at the age of 25. .",
      dat:"1996",
    },


    {
        title: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        genre: "Autobiography",
        img: "6.jpg",
        des: "Wings of Fire revolves around the personal & professional life of Kalam and the individuals who made an impact on him. The book is mainly divided into 4 sections (Orientation, Creation, Propitiation and Contemplation) of Kalam’s life which contains 16 chapters and an epilogue.",
        dat:"1999",
      },











    
  ];
  booksRouter.get("/nmy/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Single Book",

      book1: books2[id],
    });
  });

  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Single Book",
      book1: books[id],
    });
  });

  booksRouter.get("/", function (req, res) {
    res.render("books", {
      nav,
      title: "Books:Library",
      books,
      books2,
    });
  });

  return booksRouter;
}

module.exports = router;