import React from 'react';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component{
  state = {
    players: [],
  };

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      // .then(res => console.log({ res }))
      .then(res => this.setState({ players: res }))

      .catch(err => console.log('AHHH BUG', err))
  }

  render(){
    return(
      <div className='App'>
        <Navbar />
        <PlayerCard players={this.state.players} />
      </div>
    )
  }  
}

export default App;
