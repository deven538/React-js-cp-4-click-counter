// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head">
          The Button has been clicked <br />{' '}
          <span className="click-style">{count}</span> times
        </h1>
        <p className="Para">Click the button to increase the count!!</p>
        <div className="button">
          <button className="click-me" type="button" onClick={this.onIncrement}>
            click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
