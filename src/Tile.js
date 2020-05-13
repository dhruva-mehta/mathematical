import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      row: this.props.row,
      column: this.props.column,
      value: Math.floor(Math.random() * 10),
      mergedFrom: null
    }
  }

  // componentDidMount() {
  //   this.setState
  // }

  render() {
    return(
      <div>
        {this.state.value}
      </div>
    )
  }
}
