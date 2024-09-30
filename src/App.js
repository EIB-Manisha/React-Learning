 import React from "react";
 import ReactDOM from "react-dom/client";

const elemnt = <span>Element inside Element</span>
//React Element
const ReactElement =()=> (
    <div>
        <h1 className="heading">This is JSX React Element</h1>
        {elemnt}
    </div>
)
const value = "javascript expression";

//React Functional Component
//This is component composition when one component is inside anothet component
const FunctionalComponent = () => {
    return(
        <div id="container">
            {/* one way of calling functional component */}
           {ReactElement()}
            {/* another way of calling functional component */}
           <ReactElement/>
           {/* you can inject any javascriptexpression inside these cury bracets */}
            <h1>{value}</h1>  
        <h1>This is functional component which is returning JSX Element</h1>

        </div>
    )
};
const FunctionalComponent2 = ()=> (<h1>This is another way of writing the code in functional Component</h1>);
const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(a);
root.render(<FunctionalComponent/>);
