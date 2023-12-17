import React, { useState } from 'react'
import './AdminLogin.css'
import { BiSolidKey } from 'react-icons/bi'
import { FaUserAlt, FaLock, FaUser } from 'react-icons/fa'
import { BsQuestionLg } from 'react-icons/bs'
import { MdEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import { AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios'

function AdminLogin() {
    document.title = "Create Admin";
    const [username, setusername] = useState("")
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [family, setfamily] = useState('')


    function sendadmin(e) {
        e.preventDefault()
        let savedAdmin = {
            username: username,
            email: email,
            password: password,
            name: name,
            family: family

        }
        let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/admins"
        axios.post(API, savedAdmin)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const mystyle = {
        color: 'white'
    }
    return (
        <div className='AdminLogin'>
            <div className="containerAdmin">
                <div className="boxAdmin">
                    <div className="coverAdmin"></div>
                    <div className="shadovAdmin"></div>
                    <div className="contentAdmin">
                        <div className="formAdmin">
                            <h3 className='logo' style={mystyle}><BiSolidKey className='keylogo' /></h3>
                            <h2>sign in</h2>

                            <form onSubmit={sendadmin} >
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        onChange={(e) => setusername(e.target.value)}
                                        required />
                                    <FaUserAlt className='i' />
                                    <span>username</span>
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="email"
                                        onChange={(e) => setemail(e.target.value)}
                                        required />
                                    <MdEmail className='i' />
                                    <span>email</span>
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="password"
                                        onChange={(e) => setpassword(e.target.value)} required />
                                    <FaLock className='i' />
                                    <AiFillEyeInvisible className='i' id='eye' />
                                    <span>password</span>
                                </div>

                                <div className="inputBox">
                                    <input
                                        type="tex"
                                        onChange={(e) => setname(e.target.value)}
                                        required />
                                    <MdDriveFileRenameOutline className='i' />
                                    <span>name</span>
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        onChange={(e) => setfamily(e.target.value)} required />
                                    <MdDriveFileRenameOutline className='i' />

                                    <span>familiya</span>
                                </div>
                                <div className="linksAdmin">
                                    <a href="#"> <BsQuestionLg className='i' />forgot password</a>
                                    <a href=""> <FaUser className='i' /> sign in</a>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value={"sign up"} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
