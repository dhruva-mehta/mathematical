import React from 'react';
import Tile from './Tile.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: null,
      start: Math.ceil(Math.random() * 100),
      rows: this.props.rows,
      columns: this.props.columns
    }
  }

  componentDidMount() {
    this.setState({score: this.state.start})
  }

  render() {
    var tiles = []
    for (var x = 0; x < this.props.rows; x++) {
      var row = []
      for (var y = 0; y <this.props.columns; y++) {
        row.push(<Tile row={x} column={y} />)
      }
      tiles.push(row)
    }
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: 20}}>
          {this.state.score}
        </div>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: 20}}>
          {tiles.map((row, index) => {
            return <div key={index}>{row}</div>
          })}
        </div>
      </div>

    )
  }
}
