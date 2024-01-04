import React, {useState} from "react";
import Header from "./Header";
import Footer from './Footer';
import Page from "./Page";
import CreateArea from "./createArea";


function App() {
  const [pages, setPages] = useState([]);

  function addPage(newPage) {
    setPages(prevPages => {
      return [...prevPages, newPage];
    });
  }

  function deletePage(id) {
    setPages(prevPages => {
      return prevPages.filter((pageItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addPage} />
      {pages.map((pageItem, index) => {
        return (
          <Page
            key={index}
            id={index}
            date={pageItem.date}
            content={pageItem.content}
            onDelete={deletePage}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;