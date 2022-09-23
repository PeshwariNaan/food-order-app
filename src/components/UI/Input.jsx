import React from 'react';
import classes from './Input.module.css';


//I want to use refs in a custom component - I need to wrap the custom component in React.forwardRef
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
