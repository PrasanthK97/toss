// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    current: true,
    heads: 0,
    tails: 0,
  }

  tossing = () => {
    if (Math.floor(Math.random() * 100) % 2 === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))

      this.setState({
        url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {url, heads, tails} = this.state
    const tot = heads + tails
    return (
      <div className="bg-main">
        <div className="bg-sub">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="coin-img" src={url} alt="toss result" />
          <button onClick={this.tossing} type="button">
            Toss Coin
          </button>
          <div className="count-cont">
            <p className="cont">Total: {tot}</p>
            <p className="cont">Heads: {heads}</p>
            <p className="cont">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
