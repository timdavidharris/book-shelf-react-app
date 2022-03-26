import React from 'react';
import AddBook from './components/AddBook';
import GithubLink from './components/GithubLink';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>
          Book Shelf
        </h1>
        <h2>
          Books on Your Shelf
        </h2>
        <section id='book-cards'>
          <AddBook />
          <GithubLink />
        </section>
      </div>
    )
  }
}

export default App;