import React, { useState } from 'react'
import "./index.scss";
import { AiFillStar } from "react-icons/ai";
const FeedBackForm = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [review, setReview] = useState("")

    const handleSubmitReview = async e => {
        e.preventDefault()
    }

    return (
        <>
            <div>
                <form action="">
                    <h3>How worldyou rate the overall</h3>

                    <div>
                        {[...Array(5).keys()].map((_, index) => {
                            index += 1
                            return (
                                <button key={index} type='button' className={`${index <= (rating && hover) || hover ? "active_star" : "star"} btn`} onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)} onDoubleClick={() => { setHover(0); setRating(0) }}>
                                    <span>
                                        <AiFillStar />
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    <div>
                        <h3>Share your feedback</h3>

                        <textarea name="" id="" cols="30" rows="10" onChange={() => setReview(e.target.value)}></textarea>
                    </div>

                    <button type='submit' onClick={handleSubmitReview}>Submit Feedback</button>
                </form>
            </div>
        </>
    )
}

export default FeedBackForm