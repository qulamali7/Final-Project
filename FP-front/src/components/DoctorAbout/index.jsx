import React from 'react'
import "./index.scss";
import { formateDate } from '../../utils/formateDate';
const DoctorAbout = ({name,text}) => {
    return (
        <>
            <div className='doctor_about'>
                <div className='doctor_about_content'>
                    <h3>About of <span>{name}</span></h3>
                    <p>{text}</p>
                    <div>
                        <h3>Education</h3>
                        <ul>
                            <li>
                                <p>{formateDate('12-04-2022')}<span>Phd Baku</span></p>
                                <h4>New Era</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorAbout