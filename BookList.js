import React, { Component } from "react";
import Book from "./Book";
import booksdata from "./bookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: booksdata };
  }

  render() {
    // const books = this.state.books.map((item) => item.book);
    //console.log(books);

    return (
      <section>
        <h3>This is our Booklist</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item}></Book>
        ))}
      </section>
    );
  }
}
