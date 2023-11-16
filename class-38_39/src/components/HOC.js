import React from 'react';

const styles = {
  dark: {
    background: "black",
    color: "white"
  },
  blue: {
    background: "blue",
    color: "red"
  }
};

function HOC(WrappedComponent) {
  return function (props) {
    let temp = {};

    if (props.dark) {
      temp = { ...styles.dark };
    } else if (props.blue) {
      temp = { ...styles.blue };
    }

    const updatedProps = { ...props, style: temp };

    return <WrappedComponent {...updatedProps} />
  }
}

export default HOC