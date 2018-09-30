import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    getDetails: false,
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
          getDetails: true,
          app_name: res.data.app_name,
          developer: res.data.developer,
          aka: res.data.aka,
          info: res.data.info
        }))
    })
  }

  render() {
    return (
      <main>
				<header>
					<h2>MERN Stack Boilerplate</h2>
					<button onClick={this.onClick}>Get Details</button>
				</header>

        {this.state.getDetails &&
          <section>
						<p><span>Title:</span> {this.state.app_name}</p>
						<p>
							<span>Developer:</span> {this.state.developer} aka {this.state.aka}
						</p>
						<p><span>Important:</span> {this.state.info}</p>
						<p>
							Link to <a href="https://github.com/phavor/minimal-mern-template" target="_blank">
								github
							</a>
						</p>
					</section>}
      </main>
    );
  }
}