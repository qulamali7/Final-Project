import React, { useEffect, useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const FindDoctor = () => {
    const [doctors, setDoctors] = useState([])
    async function getFetch() {
        try {
            await fetch("http://localhost:3100/doctors")
                .then(res => res.json())
                .then(data => setDoctors(data.data))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        getFetch()
    }, [])

    return (
        <>
            <section id='doctors'>
                <div className='doctors_container'>
                    <h2>Find a Doctor</h2>
                    <div className='doctor_search'>
                        <input type="search" placeholder='Search' />
                        <button>Search</button>
                    </div>
                    <div className='doctor_cards'>
                        {doctors.map((doctor) => (
                            <div className='doctor_card'>
                                <div className='card_content'>
                                    <Link to={"/detail/" + doctor._id}> <img src={doctor.photo} alt="" /></Link>
                                    <h3>{doctor.name}</h3>
                                    <div className='doctor_specialty'>
                                        <button>{doctor.specialization}</button>
                                        <div className='doctor_rating'>
                                            <i className="fa-solid fa-star"></i>
                                            <span>{doctor.averageRating}</span>
                                        </div>
                                    </div>
                                    <div className='doctor_hospital'>
                                        <h4>{doctor.hospital}</h4>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

export default FindDoctor