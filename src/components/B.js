import React, { Component, createRef } from 'react';

class B extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }
    render() {
        return (<>
            <input ref={this.inputRef} />
            <button onClick = {() => {console.log(this.inputRef.current.value)}}>Click Me</button>
        </>)
    }
}

export default B;