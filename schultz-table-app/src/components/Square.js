import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={squareStyle}>
                { this.props.val }
            </div>
        );
    }
}

const squareStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px black solid',
    display: 'inline',
    padding: '5px',
    margin: '0',
    flex: '1 0 20%'
    // width: '18%'
}

export default Square;