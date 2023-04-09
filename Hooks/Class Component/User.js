import React from 'react';

class User extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:'Akash'
        }
    }
    changeData()
    {
        this.setState({name:'Akash Anand'})
    }
    render()
    {
        return(
            <div>
                <h1>This is data {this.state.name}</h1>
                <button onClick={()=>this.changeData()}>Click Me</button>
            </div>
        )
    }
}
export default User;
