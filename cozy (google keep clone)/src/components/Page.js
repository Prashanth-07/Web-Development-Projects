import React from "react";

function Page(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="page">
      <h1>{props.date}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Page;
