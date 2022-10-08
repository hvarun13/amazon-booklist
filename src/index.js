import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const booksArray = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51QnuLIY2uL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Power of Your Subconscious Mind",
    author: "Josph Murphy",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    title: "Ikigai",
    author: "Héctor García",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51PJyvcfPGL._SX321_BO1,204,203,200_.jpg",
    title: "Life's Amazing Secrets",
    author: "Gaur Gopal Das",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/517VIc78Z0L._SX331_BO1,204,203,200_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/51TYGq2X7rL._SX322_BO1,204,203,200_.jpg",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
  },
];

const Booklist = () => {
  return (
    <>
      <h1>Amazon-Best Selling Books</h1>
      <section className="booklist">
        {booksArray.map((eachBook) => {
          return <Book book={eachBook} key={eachBook.id} />;
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { id, img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <h3> Author: {author}</h3>
      <section className="rank">#{id}</section>
    </article>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist />);
