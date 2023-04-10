import React from 'react';
class Student extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:props.name,
            email:props.email
        }
    }
    changeData()
    {
        this.setState(
            {name:'Akash Anand',
            email:'akash.anand@google.com'})
    }
    render()
    {
        return(
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Email: {this.state.email}</h1>
                <button onClick={()=>this.changeData()}>Click Me</button>
            </div>
        )
    }
}
export default Student
