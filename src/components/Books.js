import React, { Component } from 'react';
import '../App.css';

class Books extends Component {
  render() {
    let bookItems;
    if (this.props.books) {
      bookItems = this.props.books.map(book => {
        let key = book.id;
        let title = book.volumeInfo.title;
        let authors = book.volumeInfo.authors;
        let pageCount = book.volumeInfo.pageCount;
        let averageRating = book.volumeInfo.averageRating;
        let link = book.volumeInfo.infoLink;
        return (
          <div className='card book-crd'>
            <ul key={key} className='nodec'>
                <li><strong>Titulo</strong> {title}</li>
                <li><strong>Autor/es: </strong>{authors}</li>
                <li><strong>Número de páginas: </strong>{pageCount}</li>
                <li><strong>Valoración: </strong>{averageRating}</li>
                <li><a className="App-link" href={link}>Link</a></li>
            </ul>
          </div>
            
        );
      });
    }
    return (
      <div>
          {bookItems}
      </div>
    );
  }
}

export default Books;
