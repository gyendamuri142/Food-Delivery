import React from 'react';
import ReactDOM from 'react-dom/client';

//Created React element using core React
const heading = React.createElement("h1", {
    id:"testing"
}, "Hello from React");
/**
 * Updating the DOM is the expensive operation to add or remove an element. 
 * And thats one of the reason React was created
 * ReactElement(object) => which converts it into HTML(Browser understand)
 */

//  const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {
//     id:"child"}, 
//     React.createElement("h1", {}, "Hello I am H1")
//     )

/**
 * 
 * BELOW LINE IS REPLACEMENT OF LINE 4 AND IN MORE READABLE FORM
 * Created react element using JSX
 * browser dont understand below line, paste it in console and see 
 *  Parcel is making it readable using babel compiler 
 */

//React Element
const jsxHeading = <h1 id='heading' className="thisIsTeWayToGiveClassName">This is a valid syntax of jsx</h1>;



/**
 * **************************************************************
 *                  FUNCTIONAL COMPONENTS
 * **************************************************************
 */

/**
 * Functional component is normal function in JS which return peice of JSX
 */

const var_to_render_in_jsx = "You can write any peice of js code here";
const another_var_to_render_in_jsx = "1000";

const FunctionalComponent = () => {
    return <h1>This is a simplest React functional component.</h1>
}

const AnotherWayToWriteFunctionalComponent_2 = () => <h1>returning multiple lines of code</h1>

//Component composition
const AnotherWayToWriteFunctionalComponent_1 = () => (
    <React.Fragment>
    { var_to_render_in_jsx }
    <h2>{another_var_to_render_in_jsx}</h2>
    {jsxHeading}
    {AnotherWayToWriteFunctionalComponent_2()}
    <AnotherWayToWriteFunctionalComponent_2 />
    <FunctionalComponent />
    <h1 className="demo">I have added another component here name as FunctionalComponent.</h1>
    </React.Fragment>
)

//React element
const jsxToMultipleLines = () => (
    <>
        {jsxHeading} I am here to make multiple lines for jsx
        <FunctionalComponent />
    </>
    
)

//React Fragment
const ReactFragmentComponent = () => {
    <>
        <div id='container_1'>
            <h1>I am here</h1>
        </div>
        <div id='container_2'></div>
    </>
}

console.log("Testing", ReactFragmentComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Way to render component, the below syntax understand by babel

//root.render(<AnotherWayToWriteFunctionalComponent_1 />);
root.render(AnotherWayToWriteFunctionalComponent_1());

