import React from "react";
import { connect } from "react-redux";
import { postComment, setCommentField } from "../store/actions/comment";

function PostComment(props) {
  return (
    <>
      <h4>Post Comment</h4>
      <hr style={{ background: "#55b8cf", height: "6px" }} />
      <form onSubmit={(e) => props.onPostComment(e, props.name, props.email, props.comment)}>
        <div className="form-group">
          <label htmlFor="username">Full Name :</label>
          <input
            type="text"
            id="username"
            name="name"
            value={props.name}
            className="form-control"
            placeholder="John Doe"
            onChange={(e) => props.onSetCommentField(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="useremail">Email :</label>
          <input
            type="email"
            id="useremail"
            name="email"
            value={props.email}
            className="form-control"
            placeholder="johndoe@gmail.com"
            onChange={(e) => props.onSetCommentField(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="usercomment">Comment :</label>
          <textarea
            type="text"
            id="usercomment"
            name="comment"
            value={props.comment}
            className="form-control"
            placeholder="Type your comment here."
            onChange={(e) => props.onSetCommentField(e.target.name, e.target.value)}
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

const mapStateToProps = state => {
  return {
    name: state.commentData.name,
    email: state.commentData.email,
    comment: state.commentData.comment,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSetCommentField: (name, value) => dispatch(setCommentField(name, value)),
    onPostComment: (e, name, email, comment) => dispatch(postComment(e, name, email, comment))
  }
}


export default  connect(mapStateToProps, mapDispatchToProps)(PostComment);