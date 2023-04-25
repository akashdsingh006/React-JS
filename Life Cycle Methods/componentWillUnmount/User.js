import React from 'react'
import Feature from './Feature'
import Student from './student'
class User extends React.Component
{
    constructor()
    {
        super();
        this.state={
            show:true
        }
    }
    render()
    {
        return(
            <div className='App'>
                
                <h1>My page</h1>
                {
                    this.state.show ? <Student /> : <h1>No component</h1>
                }
                <br/>
                <button onClick={()=>this.setState({show:!this.state.show})}>Click Me</button>
            </div>
        )
    }
}

export default User
