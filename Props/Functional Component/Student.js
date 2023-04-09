import React, { useState } from 'react'
function Student(props)
{
    const[name,setName]=useState(props.name);
    const[email,setEmail]=useState(props.email);
    function set()
    {
        setName('Akash Anand')
        setEmail('akash.anand@gmail.com')
    }
    return(
        <div>
            <h1>Name: {name}</h1>
            <h2>Email : {email}</h2>
            <button onClick={()=>set()}>Click Me</button>
        </div>
    )
}
export default Student;
