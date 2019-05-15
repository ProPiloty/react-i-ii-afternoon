import React, {Component} from 'react';
import './reset.css';
import './App.css';
import users from './data';

// COMPONENTS
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import Controls from './Components/Controls/Controls';

class App extends Component {

  constructor(){
    super();

    this.state = {
      users: users,
      page: 1,
    }
  }

  next = () => {
    if(this.state.page === 25) {
      this.setState({
        page: 1,
      })
    } else {
      this.setState({
        page: this.state.page + 1,
      })
    }
  }

  prev = () => {
    if(this.state.page === 1) {
      this.setState({
        page: 25,
      })
    } else {
      this.setState({
        page: this.state.page - 1,
      })
    }
  }

  render(){
    const filteredUser = this.state.users.filter(user => (
      user.id === this.state.page
    ))

    return (
      <div className='App'>
        <Navbar/>
        <div className='cardAndControls'>
          <Card filteredUser={filteredUser} />
          <Controls next={this.next} prev={this.prev} />
        </div>
      </div>
    )
  }
}

export default App;
