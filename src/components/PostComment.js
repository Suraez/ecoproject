import React from 'react'

export default function PostComment() {
    return (
        <>
        <h4>Post Comment</h4>
        <hr style={{background: '#55b8cf', height: '6px'}}/>
            <div className="form-group">
                <label htmlFor="username">Full Name</label>
                <input type="text" id="username" className="form-control" placeholder="John Doe"/>
            </div>
            <div className="form-group">
                <label htmlFor="useremail">Email :</label>
                <input type="email" id="useremail" className="form-control" placeholder="johndoe@gmail.com"/>
            </div>
            <div className="form-group">
                <label htmlFor="usercomment">n value</label>
                <textarea type="text" id="usercomment" className="form-control" placeholder="Type your comment here."/>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-info">
                Post Comment
            </button>
            </div>
        </>
    )
}
