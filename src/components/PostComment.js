import React, { useState } from "react";
import axios from "../axiosConfig";

export default function PostComment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const postHandler = (e) => {
      e.preventDefault();
    axios
      .post("/comments.json", { name, email, comment, date: new Date().toJSON().slice(0,10).replace(/-/g,'/')})
      .then((res) => {
        setName("")
        setEmail("")
        setComment("")
        alert("Thanks for the comment! Your comment will be posted soon.")
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h4>Post Comment</h4>
      <hr style={{ background: "#55b8cf", height: "6px" }} />
      <form onSubmit={postHandler}>
        <div className="form-group">
          <label htmlFor="username">Full Name :</label>
          <input
            type="text"
            id="username"
            value={name}
            className="form-control"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="useremail">Email :</label>
          <input
            type="email"
            id="useremail"
            value={email}
            className="form-control"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="usercomment">comment :</label>
          <textarea
            type="text"
            id="usercomment"
            value={comment}
            className="form-control"
            placeholder="Type your comment here."
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info">
            Post Comment
          </button>
        </div>
      </form>
    </>
  );
}
