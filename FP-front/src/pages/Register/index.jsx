import React, { useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Register = () => {

    const [selectFile, setSelectFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        photo: selectFile,
        role: ""
    })
    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFile=async(event)=>{
        const file=event.target.files[0]
    }

    const handleSubmit =async event=>{
        event.preventDefault()
    }


    return (
        <>
            <section id='register'>
                <div className='register_container'>
                    <div className='register_content'>
                        <div className='register_left'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOXKHPXl8lBa90kfu3nPZgA0Ln2Jr8CSKeQ&usqp=CAU" alt="" />
                        </div>
                        <div className='register_right'>
                            <div className='right_content'>
                                <h3>Create an <span>Account</span></h3>
                                <form onChange={handleSubmit}>
                                    <div className='login_input'>
                                        <input type="text" placeholder='Full Name' name='name' required value={formData.name} onChange={handleInput} />
                                    </div>
                                    <div className='login_input'>
                                        <input type="email" placeholder='Enter Your Email' name='email' required value={formData.email} onChange={handleInput} />
                                    </div>
                                    <div className='login_input'>
                                        <input type="password" placeholder='Password' name='password' required value={formData.password} onChange={handleInput} />
                                    </div>

                                    <div className='role_photo'>
                                        <div className='select_role'>
                                        <label htmlFor="">Are you a:</label>
                                        <select name="role" id="" value={formData.role} onChange={handleInput}>
                                            <option value="patient">Patient</option>
                                            <option value="doctor">Doctor</option>
                                        </select>
                                        </div>
                                        <div className='form_photo_upload'>
                                        <figure>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCg3ECfhNnwn30E2r5J-Sb2UphwWfflyqgeA&usqp=CAU" alt="" />
                                        </figure>
                                        <div className='button_upload'>
                                            <input type="file" name='photo' id='customfile' accept='.jpg, .png' onChange={handleFile} />
                                            <label htmlFor="customfile">Upload Photo</label>
                                        </div>
                                    </div>
                                    </div>

                                    

                                    <button>Sign Up</button>

                                </form>
                                <p>Already have an acoount? <Link to={"/login"}>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register