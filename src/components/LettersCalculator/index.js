import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    textInput: 0,
  }

  onChangeInput = event => {
    this.setState({textInput: event.target.value.length})
  }

  render() {
    const {textInput} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="text-cal">
            <label className="para">Enter the phrase</label>

            <input
              type="text"
              placeholder="Enter the phrase"
              className="text"
              onChange={this.onChangeInput}
            />
          </div>
          <div className="letter-count">
            <p className="count">No.of letters: {textInput}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="cal-img"
        />
      </div>
    )
  }
}

export default LettersCalculator
