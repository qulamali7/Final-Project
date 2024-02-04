import React, { useState } from 'react'
import "./index.scss";
import FeedBackForm from '../FeedBackForm';
const DoctorFeedback = () => {
    const [showFeedback, setShowFeedback] = useState(false)
    return (
        <>
            <div>
                <div>
                    <h4>All reviews(272)</h4>
                    <div>
                        <div>
                            <figure><img src={avatar} alt="" /></figure>
                        </div>
                        <div>
                            <h5>Ali Ahmed</h5>
                        </div>
                    </div>
                    {
                        !showFeedback && <div>
                            <button onClick={() => setShowFeedback(true)}>give feed back</button>
                        </div>}
                    {showFeedback && <FeedBackForm />}
                </div>
            </div>
        </>
    )
}

export default DoctorFeedback