import './App.css'
import Data from './Data'
import React, { Fragment, useEffect, useState } from 'react'
function User(props)
{
    useEffect(()=>{
        console.log('Count is'+props.count)
    },[props.count])
    return(
        <div className='App'>
            <h1>Count : {props.count}</h1>
            <h1>Data : {props.data}</h1>
        </div>
    )
    
}
export default User
