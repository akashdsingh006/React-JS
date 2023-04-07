
import React,{useState} from 'react';
import './App.css'
function User()
{
    const [data,setData]=useState("Red")
    function change(param)
    {
        setData(param)
    }
    return(
        <div class='App'>
            <h1>My favorite color is {data}</h1>
            <button onClick={()=>change('Red')}>Red</button>
            <button onClick={()=>change('Blue')}>Blue</button>
            <button onClick={()=>change('Green')}>Green</button>
            <button onClick={()=>change('Yellow')}>Yellow</button>
        </div>
    )
}

export default User;
