"use client"
import React, { useState } from 'react'
import userDispatch from './userUtils'

const AddUsers = () => {
    const [name , setName] = useState('');
    
    const handlingDispatch = () =>{
        console.log(name);
        userDispatch();
    }

  return (
    <div className='class-user'>
        <h3>User List :-</h3>
        <input type='text' placeholder='Add New User' onChange={(e)=>setName(e.target.value)} />
        <button  onClick={handlingDispatch} >Add user</button>
    </div>

  )
}

export default AddUsers