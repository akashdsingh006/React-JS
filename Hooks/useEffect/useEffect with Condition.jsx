import './App.css'
import React, { Fragment, useEffect, useState } from 'react'
function User(props)
{
    const[count,setCount]=useState(0);
    const[data,setData]=useState(0);
    useEffect(()=>{
        console.log('useEffect')
        
    },[count])
    return(
        <div className='App'>
            <h1>My Home Page</h1>
            <h2>Count: {count}</h2>
            <h2>Data: {data}</h2>
            <button onClick={()=>setCount(count+1)}> Update Count </button>
            <button onClick={()=>setData(data+1)}> Update Data </button>

        </div>
    )
}
export default User
