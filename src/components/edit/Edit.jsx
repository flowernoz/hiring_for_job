import React, { useState } from 'react'
import './Edit.css'
import axios from 'axios';
import { FaUserTie } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaFileContract } from 'react-icons/fa';
import { FaBuilding} from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaImage} from 'react-icons/fa';
import { FaBriefcase }from 'react-icons/fa';
import { FaCheck} from 'react-icons/fa';

function Edit({ changeble }) {
    const [job, setJob] = useState(changeble.job)
    const [employer, setEmployer] = useState(changeble.employer)
    const [location, setLocation] = useState(changeble.location)
    const [contract, setContract] = useState(changeble.contract)
    const [joiningDate, setJoiningDate] = useState(changeble.joiningDate)
    const [salary, setSalary] = useState(changeble.salary)
    const [img, setImg] = useState(changeble.img)
    const [provides, setProvides] = useState(changeble.provides)
    const [requirements, setRequirements] = useState(changeble.requirements)

    const iconStyle = {
        fontSize: '26px',
        color: 'white',
        padding: '2px',
        backgroundColor: 'white',
        borderRadius: '2px',
    };

    document.body.style.overflow = "hidden"
    document.title = "Edit"

    function editItemData(e) {
        e.preventDefault()
        let changedData = {
            job: job,
            employer: employer,
            location: location,
            contract: contract,
            joiningDate: joiningDate,
            salary: salary,
            img: img,
            provides: provides,
            requirements: requirements
        }
        let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";
        axios.put(API + "/" + changeble.id, changedData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='edit_page'>
            <form className="edit_form" onSubmit={editItemData}>
                <div>

                    <label><FaUserTie style={iconStyle} /> Job</label>
                    <input type="text" value={job} onChange={(e) => setJob(e.target.value)} placeholder='Enter job' />
                </div>
                <div>
                    <label><FaBuilding style={iconStyle}/> Employer</label>
                    <input type="text" onChange={(e) => setEmployer(e.target.value)} value={changeble.employer} placeholder='Give decription' />
                </div>
                <div>
                    <label><FaLocationArrow style={iconStyle} /> Location</label>
                    <input type="text" onChange={(e) => setLocation(e.target.value)} value={changeble.location} placeholder='Choose location' />
                </div>
                <div>
                    <label><FaFileContract style={iconStyle}/> Contract</label>
                    <input type="text" onChange={(e) => setContract(e.target.value)} value={changeble.contract} placeholder='Enter contract' />
                </div>
                <div>
                    <label><FaCalendar style={iconStyle}/> Joining Date</label>
                    <input type="date" onChange={(e) => setJoiningDate(e.target.value)} value={changeble.joiningDate} />
                </div>
                <div>
                    <label><FaDollarSign style={iconStyle}/> Salary</label>
                    <input type="text" onChange={(e) => setSalary(e.target.value)} value={changeble.salary} placeholder='Enter salary' />
                </div>
                <div>
                    <label><FaImage style={iconStyle}/> Image</label>
                    <input type="text" onChange={(e) => setImg(e.target.value)} value={changeble.img} placeholder='Your image' />
                </div>
                <div>
                    <label><FaBriefcase style={iconStyle}/> Company provides</label>
                    <textarea value={changeble.provides} onChange={(e) => setProvides(e.target.value)} cols="10" rows="2" placeholder='Give provides'></textarea>
                </div>
                <div>
                    <label><FaCheck style={iconStyle}/> Requirements</label>
                    <textarea value={changeble.requirements} cols="10" rows="2" onChange={(e) => setRequirements(e.target.value)} placeholder='Your requirements'></textarea>
                </div>
                <input type="submit" className='editBTN' value={"Edit"} />
            </form>
        </div>
    )
}

export default Edit
