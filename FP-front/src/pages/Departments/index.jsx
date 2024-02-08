import React from 'react'
import "./index.scss";
const Departments = () => {
    return (
        <>
            <section id='departments'>
                <div className='page_title'>
                    <h1>Departments</h1>
                </div>
                <div className='departments_container'>
                    <div className='departments_content'>
                        <div className='departments_cards'>
                            <div className='departments_card'>
                                <div className='card_img'>
                                    <img src="https://zwin.io/html/moristan/assets/img/service/04.png" alt="" />
                                </div>
                                <div className='card_text'>
                                    <div className='line'></div>
                                    <h3>Dental</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum error corrupti iure nihil illum eveniet minus dolorem necessitatibus nobis. Placeat!</p>
                                </div>

                            </div>
                            <div className='departments_card'>
                                <div className='card_text'>
                                    <div className='line'></div>
                                    <h3>Surgeon</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum error corrupti iure nihil illum eveniet minus dolorem necessitatibus nobis. Placeat!</p>
                                </div>
                                <div className='card_img'>
                                    <img src="https://drrose.hu/sites/default/files/styles/specialty_xsmall_2x/public/media/image/2021/DRR_web_szolg_kepek_390x290_0016_mutetek.jpg.webp?itok=q6dQdCTG" alt="" />
                                </div>
                            </div>
                            <div className='departments_card'>
                                <div className='card_img'>
                                    <img src="https://media.istockphoto.com/id/1389444855/photo/shot-of-an-attractive-young-woman-sitting-and-talking-to-her-psychologist-during-a.jpg?s=612x612&w=0&k=20&c=LpV9HmdD0_Udg4YlttvwoJyLZWJThxXq-IJKeiy3zbs=" alt="" />
                                </div>
                                <div className='card_text'>
                                    <div className='line'></div>
                                    <h3>Psychologist</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum error corrupti iure nihil illum eveniet minus dolorem necessitatibus nobis. Placeat!</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className='departments_right'>
                            <img src="https://medico.dexignzone.com/xhtml/images/about/pic1.png" alt="" />
                        </div> */}
                </div>
            </section>
        </>
    )
}

export default Departments