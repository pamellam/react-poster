import React, { useState } from 'react';
import classes from './NewPost.module.css';

const NewPost = ({ onCancle, onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [authorName, setAuthorName] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setAuthorName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: authorName,
      body: enteredBody,
    };

    // console.log(postData);
    onAddPost(postData);
    onCancle();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancle}>
          Cancle
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
