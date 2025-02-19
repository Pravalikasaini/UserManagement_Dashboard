import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Create() {
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        role: 'user'
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/users', inputData)
        .then(res => {
            alert("Data Posted Successfully!")
            navigate('/')
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control'
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                </div>
                <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role:</label>
                        <select
                            name="role"
                            className="form-select"
                            value={inputData.role}
                            onChange={e => setInputData({ ...inputData, role: e.target.value })}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create