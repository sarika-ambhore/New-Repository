import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    }
  }
  renderSquare = (value) => {
    this.setState({ value: value });
    console.log("value", this.state.value);
    this.state.data.push(this.state.value);
    console.log(this.state.data);
    this.setState({value:''});
  }

  onChangeValue = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        {/* <button className="square"></button> */}
        <input type="text" value={this.state.value} onChange={this.onChangeValue} />
        <button onClick={this.renderSquare.bind(this)}>Submit</button>

        <div>
          <table id="square">
            <tbody>
              <tr id="row0">
                <td id="cell0-0">{this.state.data[0]}</td>
                <td id="cell0-1">{this.state.data[1]}</td>
                <td id="cell0-2">{this.state.data[2]}</td>
              </tr>
              <tr id="row1">
                <td id="cell1-0">{this.state.data[3]}</td>
                <td id="cell1-1">{this.state.data[4]}</td>
                <td id="cell1-2">{this.state.data[5]}</td>
              </tr>
              <tr id="row2">
                <td id="cell2-0">{this.state.data[6]}</td>
                <td id="cell2-1">{this.state.data[7]}</td>
                <td id="cell2-2">{this.state.data[8]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );

  }
}
export default App;
