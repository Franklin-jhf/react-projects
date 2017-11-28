import React, { Component } from 'react'

import Square from "../components/Square";

class Board extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderSquare = i => {
        return (
            <Square val={i} />
        )
    }
    

    render() {


        return (
            <div style={styles.rows}>
                { idList.map(i => this.renderSquare(i)) }
            </div>
        );
    }
}

const idList = Array.apply(null, {length: 25}).map(Number.call, Number)

const styles = {
    rows: {
        width: '70vw',
        height: '70vw',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0'
    }
}


export default Board;
