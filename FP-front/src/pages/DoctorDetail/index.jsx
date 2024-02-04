import React, { useEffect, useState } from 'react'
import "./index.scss";
import { useParams } from 'react-router-dom';
import DoctorAbout from '../../components/DoctorAbout';
import DoctorFeedback from '../../components/DoctorFeedback';
const DoctorDetail = () => {
    const [tab, setTab] = useState("about")
    const { id } = useParams()
    const [detailDoctor, setDetailDoctor] = useState([])
    async function getFetchById(id) {
        try {
            await fetch("http://localhost:3100/doctors/" + id)
                .then(res => res.json())
                .then(data => setDetailDoctor(data.data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetchById(id)
    }, [])
    return (
        <>
            <section id='detail_doctor'>
                <div className='detail_doctor_container'>
                    <div className='detail_doctor_content'>
                        <div className='doctor_left'>
                            <div className='doctor_left_top'>
                                <div className='doctor_img'>
                                    <img src={detailDoctor.photo} alt="" />
                                </div>
                                <div className='doctor_text'>
                                    <h3>{detailDoctor.name}</h3>
                                    <button>{detailDoctor.specialization}</button>
                                </div>
                            </div>
                            <div className='doctor_left_bottom'>
                                <button onClick={()=>setTab("about")} className={`${tab==='about' && "active_btn"} about_btn`}>About</button>
                                <button onClick={()=>setTab("feedback")} className={`${tab==='feedback' && "active_btn"} about_btn`}>FeedBack</button>
                            </div>
                            <div>
                                {
                                    tab==='about' && <DoctorAbout name={detailDoctor.name} text={detailDoctor.bio}/>
                                }
                                {
                                    tab==='feedback' && <DoctorFeedback/>
                                }
                            </div>
                        </div>
                        <div className='doctor_right'>
                            <div className='doctor_right_content'>
                                <div className='doctor_right_content_title' >
                                    <p>Ticket Price</p>
                                    <h4>500UBdt</h4>
                                </div>
                                <h3>Available days</h3>
                                <ul>
                                    <li>
                                        <p>Sunday</p>
                                        <span>4:00-9:30</span>
                                    </li>
                                </ul>
                                <button>Book Appointmnet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoctorDetail