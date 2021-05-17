import './style.css';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        FullName : 'Rana Meftah',
        Profession: 'Biological engineer & full stack student',
        Bio: 'I am a biological enginner and a full stack student.I have worked as a Quality Manager for 11 months and I am studying now web development because I am passionate about it.' ,
        SrcImg : 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' ,
        Show: false,
        date: 0
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  tick(prevState) {
    this.setState({
      date: this.state.date + 1
    });
  }


  isToggle = () => {
    this.setState(state => ({
      Show : !this.state.Show
    }))
  }

  render() {
    const Show = this.state.Show;
    return (
      <div className='Profile'>
        <h1> {this.state.FullName} </h1>
        <h3> {this.state.Profession} </h3>
        <p className='bio'> {this.state.Bio} </p>
        <button onClick={this.isToggle}>Show profile image</button>
        <br/><br/>
        <img src={Show ? './profileimage.jpg' : this.state.SrcImg} alt='profileimge'></img>
        <p className='Time'> The last component was mounted since {this.state.date} seconds</p>
        
        
        
      </div>
    )
  }
}

export default App
