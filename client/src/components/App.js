import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    app_name: '',
    developer: '',
    aka: '',
    info: ''
  }

  onClick = () => {
    axios({
      url: 'http://localhost:5000/details',
      method: 'GET'
    })
      .then((res) => {
        this.setState(() => ({
          app_name: res.app_name,
          developer: res.developer,
          aka: res.aka,
          info: res.info
        }))
      .catch(err => document.write(err))
    })
  }

  render() {
    return (
      <main>
        <header>
          <h2>MERN Stack Boilerplate</h2>
          <button
            onclick={this.onClick}
          >Get Details
          </button>
        </header>

        <section>
          <p>Title: {this.state.app_name}</p>
          <p>Developer: {this.state.developer} and is known as {this.state.aka}</p>
          <p>Important: {this.state.info}</p>
          <p>Link to <a href="github.com/phavor">github</a></p>
        </section>
      </main>
    )
  }
}