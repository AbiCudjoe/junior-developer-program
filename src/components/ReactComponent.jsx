import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ReactComponent = (props) => {
  const { isJSXCool } = props;
  
  return (
    <div className="inner-page">
        <h2>What is React?</h2>
        <p>This is React</p>
        <p>A Javascript library with a bunch of features that allow you to build simple and complex User Interfaces</p>
        <p>These features include:</p>
        <ul style={ { textAlign: 'left' } }>
          <li>Embedding HTML in JavaScript with JSX</li>
          <li>Class based or functional components that work independently but can be linked together to create single page applications</li>
          <li>Components that update (or re-render) based on state and prop changes</li>
        </ul>
        <p><Link to="/JSX-is-cool" >JSX is cool</Link></p>
    </div>
  );
};

ReactComponent.propTypes = {
    isJSXCool: PropTypes.bool
};

ReactComponent.defaultProps = {
  isJSXCool: true
};

export default ReactComponent;