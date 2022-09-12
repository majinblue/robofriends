import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  // Runs as soon as the pages loads, and the App component mounts to the CSS
  componentDidMount() {
    fetch ('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // Takes the response (users) and assigns it to my state
      .then(users => this.setState({robots: users}));
  }
  onSearchChange= (event) => {
    // Changes state so the 'searchfield' state stays updated
    this.setState({ searchfield: event.target.value})
  }
  // Runs immediately after the constructor 
  render() {
    // Gathers an array of all the robots whose names include the current value of my 'searchfield' state
    const filteredRobots = this.state.robots.filter(robot => {
      // Returns an array robot objects that meet the filter's requirement
      return robot.name.toString().toLowerCase().includes(this.state.searchfield.toString().toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1 className='tc'>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filteredRobots} />
        </div>
      )
    }
  }
}
export default App