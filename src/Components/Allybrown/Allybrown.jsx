// Component - Allybrown.jsx
// File Imports Go Here
import React, {Component} from 'react'
// Component Companion Stylesheet
import '/Allybrown.css'

/**
 * @class Allybrown Component
 * @classdesc - Provide a description
 *
 * @example - Provide an example of the JSX
 * 
 * @namespace -Parent, children of the Component will have this as @memberOf
 * @exports
 */ 

export default class Allybrown extends Component{
    /**
     * @constructor
     * @param {} 
     */
    constructor(props){
        super(props)
    }
    // Lifecycle methods
    render(){
        // Render Scope
        const { /** Props go in here */} = this.props;
        return(
            // JSX Goes here
        )
    }
}

/**
 * For More Information on using React Lazy Components 
 * https://reactjs.org/docs/code-splitting.html#reactlazy
 * For more information about using JSDocs with React Components
 * https://react-styleguidist.js.org/docs/documenting/
 *
 */