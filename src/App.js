import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(res=>res.json())
    .then(toys=> this.setState({toys}))
  }

  addToy = (toy) =>{
    const newToy = {
      toy ,
      likes: 0
    }
    fetch('http://localhost:3000/toys',
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res=>res.json())
    .then(newToy=> this.setState({
      toys: [...this.state.toy, newToy],
    }));
  }

  removeToy = (id) => {
      fetch(`http://localhost:3000/toys/${id}`,{
        method: "DELETE"
      }).then(res => res.json())
  
      const updatedToys = [...this.state.toys].filter(toy => toy.id !== id)
      this.setState({
        toys: updatedToys
      })
  }

  likeToy = (toy) => {
   let increasedLikes = toy.likes +=1   
   console.log(this.state)
    fetch(`http://localhost:3000/toys/${toy.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({likes: increasedLikes})})
      
    .then(res => res.json())
    .then(toy => this.setState(toy))
    }
    

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    // console.log(this.state.toys)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer  toylist={this.state.toys} removeToy={this.removeToy} likeToy={this.likeToy}/>
      </>
    );
  }
}

export default App;
