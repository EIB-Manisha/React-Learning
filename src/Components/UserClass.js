import React from "react";



class UserClass extends React.Component{


    constructor(props)
{
    super(props);
    console.log(" child constructor called");
    this.state={
        count:0,
    }
}

componentDidMount(){
    console.log("child component did mount");
  }




    render(){
        console.log(" Child render is callled");

        const {name}= this.props;
        const {count}= this.state;
        return(
            
            
            
            <div style={{textAlign:'center',border:"1px solid black"}}>
                <h1>{name}</h1>
                <h1>{count}</h1>
                <button
                onClick={()=>{
                    this.setState({count:this.state.count+1,

                    });
                }}
                >Increament</button>
                
            </div>
            
           
        )
        
    }
};

export default UserClass;