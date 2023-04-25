import './App.css'
import React, { Fragment, useEffect, useState } from 'react'
function User()
{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log('useEffect')
        
    })
    return(
        <div className='App'>
            <h1>My Home Page</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}> Click Me </button>
        </div>
    )
}
export default User
