import React, { useState } from "react";

function CreateArea(props) {
  const [page, setPage] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPage(prevPage => {
      return {
        ...prevPage,
        [name]: value
      };
    });
  }

  function submitPage(event) {
    props.onAdd(page);
    setPage({
      date: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={page.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={page.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitPage}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
