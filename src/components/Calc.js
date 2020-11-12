import React  from 'react'

import Footer from './Footer'
import Navigation from './Navigation'
import styles from "../assets/css/calc.module.css"
import Comment from './Comment'
import PostComment from './PostComment'
import assets from '../assets'
import axios from "../axiosConfig"
import Pagination from './UI/Pagination'
import { Component } from 'react'
import AnsModal from './AnsModal'
import allFunctions from "./HelperFunctions"


class Calc extends Component{
    state = {
        commentArr: [],
        currentPage: 1,
        commentPerPage: 5,
        imagePath: null,
        firstSum: null,
        isOpen: false,
        firstInput: "",
        secondInput: "",
        thirdInput: "",
        execFunction: null,
        ans: "",
    }

    componentDidMount () {
        this.getStates(this.props.match.params.id)
        axios.get('/comments.json')
        .then(res => {
            let allComments = []
            for (let key in res.data) {
                allComments.push({
                    id: key,
                    ...res.data[key]
                })
            }
            this.setState({commentArr: allComments})
        })
        .catch(err => console.log(err))
    }

    paginate = (page) => {
        this.setState({currentPage: page})
    }


    getStates = (id) => {
        switch (id) {
            case '1':
                this.setState({imagePath: 'formula1', firstSum: 'P', execFunction: allFunctions.firstFunction})
                break;
            case '2':
                this.setState({imagePath: 'formula2', firstSum: 'A', execFunction: allFunctions.secondFunction})
                break;
            case '3':
                this.setState({imagePath: 'formula3', firstSum: 'F', execFunction: allFunctions.thirdFunction})
                break;
            case '4':
                this.setState({imagePath: 'formula4', firstSum: 'F', execFunction: allFunctions.fourthFunction})
                break;
            case '5':
                this.setState({imagePath: 'formula5', firstSum: 'P', execFunction: allFunctions.fifthFunction})
                break;
            case '6':
                this.setState({imagePath: 'formula6', firstSum: 'A', execFunction: allFunctions.sixthFunction})
                break;
            case '7':
                this.setState({imagePath: 'formula7', firstSum: 'G', execFunction: allFunctions.seventhFunction})
                break;
            default:
                this.setState({imagePath: 'formula8', firstSum: 'F', execFunction: allFunctions.eighthFunction})
                break;
        }
    }

    onCalculateHandler = () => {
        const ans = this.state.execFunction(+this.state.firstInput, +this.state.secondInput, +this.state.thirdInput);
        this.setState({isOpen: true, ans})
    }
    
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const updatedCommentArr = [...this.state.commentArr];
        const indexOfLastComment = this.state.currentPage * this.state.commentPerPage;
        const indexOfFirstComment = indexOfLastComment - this.state.commentPerPage;
        const slicedCommentArr = updatedCommentArr.slice(indexOfFirstComment, indexOfLastComment);
        const hasNextPage =
          !(
            this.state.commentArr.length >= indexOfFirstComment &&
            this.state.commentArr.length <= indexOfLastComment
          ) && indexOfFirstComment < this.state.commentArr.length;

        // console.log(this.state.commentArr.length);
        return (
          <>
            <div className="container bg-white shadow text-muted p-4">
              <Navigation />
              <div className="row d-flex justify-content-center m-2">
                <div className="col-md-8 col-12 text-justify">
                  Let this calculator do the heavy lifting.This formula helps
                  you to calculate equivalent worth (Future Worth, F) given the
                  values of Present Worth (P), interest rate per year (effective
                  interest rate) and time (investment duration).
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-12">
                  <img
                    src={assets[this.state.imagePath]}
                    alt="image1"
                    className={styles.image}
                  />
                </div>
                <div className="col-md-6 col-12 mt-3">
                  <h4>Fill in the values.And get answers in seconds.</h4>
                  <hr style={{ background: "#55b8cf", height: "6px" }} />
                  <div className="form-group">
                    <label htmlFor="firstInput">
                      {this.state.firstSum} value
                    </label>
                    <input
                      type="text"
                      id="firstInput"
                      onChange={this.onChangeHandler}
                      name="firstInput"
                      value={this.state.firstInput}
                      className="form-control"
                      placeholder="e.g. 10000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="secondInput">i value</label>
                    <input
                      type="text"
                      id="secondInput"
                      onChange={this.onChangeHandler}
                      name="secondInput"
                      value={this.state.secondInput}
                      className="form-control"
                      placeholder="e.g. type 0.1 for 10%"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="thirdInput">n value</label>
                    <input
                      type="text"
                      id="thirdInput"
                      onChange={this.onChangeHandler}
                      name="thirdInput"
                      value={this.state.thirdInput}
                      className="form-control"
                      placeholder="e.g. 5"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-info"
                      onClick={this.onCalculateHandler}
                    >
                      Calculate
                    </button>
                    <AnsModal
                      open={this.state.isOpen}
                      onClose={() => this.setState({ isOpen: false })}
                    >
                      <div className="modal-header">
                        <h4>Answer</h4>
                        <button
                          className={`${styles.Right} btn-info`}
                          onClick={() => this.setState({ isOpen: false })}
                        >
                          X
                        </button>
                      </div>
                      <div className="modal-body">
                        <h3>
                          {this.state.ans && !isNaN(this.state.ans) ? `${this.state.firstSum} = ` : null}
                          {this.state.ans && !isNaN(this.state.ans) ? (
                            this.state.ans
                          ) : (
                            <p>Oops ! Put the correct valules</p>
                          )}
                        </h3>
                      </div>
                    </AnsModal>
                  </div>
                </div>
              </div>
              <h4>Comments</h4>
              <hr style={{ background: "#55b8cf" }} />
              <div className="row">
              <div className="col-md-6 col-12">
                  {slicedCommentArr &&
                    slicedCommentArr.map((comment) => (
                      <Comment
                        key={comment.id}
                        date={comment.date}
                        name={comment.name}
                        comment={comment.comment}
                      />
                    ))}
                    <div className="d-flex justify-content-center m-4">
                            <Pagination
                            paginate={this.paginate}
                            totalComments={this.state.commentArr.length}
                            commentPerPage={this.state.commentPerPage}
                            page={this.state.currentPage}
                            hasNextPage={hasNextPage}
                        />
                    </div>
                </div>
                <div className="col-md-6 col-12">
                <PostComment />
                </div>
              </div>
              <hr style={{ background: "#55b8cf" }} />
              <Footer />
            </div>
          </>
        );
    }
}
export default Calc;