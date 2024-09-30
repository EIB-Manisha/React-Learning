import React from 'react';
import UserClass from './UserClass';
import User from './User';


class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount(){
    console.log("parent component did mount");
  }


  render(){
    console.log(" parent  render is callled");
    return (
      
      
      <div>
        
          <h1 style={{textAlign:'center',border:"1px solid black"}}>About Page</h1>
          <User name={"Functional Component"}/>
         <UserClass  name={"Class Component"} />
         
      </div>
    )
  }
}



export default About