import React, { Component } from 'react';

class ToyForm extends Component {

  state ={
    name: '',
    image: ''
  }
  render() {
    return (
      <div className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" onClick={() => this.props.addToy(this.state)}/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
