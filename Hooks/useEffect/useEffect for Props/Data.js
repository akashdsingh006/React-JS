import React, { useState } from 'react'
import User from './Users'
function Data()
{
    const[data,setData]=useState(10);
    const[count,setCount]=useState(100);
    return(
        <div className='App'>
            <User data={data} count={count}/>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <br/>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}
export default Data
