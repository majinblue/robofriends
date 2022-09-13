import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
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
  // Changes the 'seachfield' state when ran (gets passed into the SearchBox component)
  onSearchChange= (event) => {
    this.setState({ searchfield: event.target.value})
  }

  // Runs immediately after the constructor 
  render() {
    const {robots, searchfield} = this.state;
    // Gathers an array of all the robots whose names include the current value of the 'searchfield' state
    const filteredRobots = robots.filter(robot => {
      // Returns the robot objects that meet the criteria described below
      return robot.name.toString().toLowerCase().includes(searchfield.toString().toLowerCase())
    })
    // While the current array of robots is empty, proceed to show 'Loading'...
    return !robots.length ?
      <h1 className='tc'>Loading...</h1>:
      // Otherwise, render the JSX below
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
  }
}
export default App;