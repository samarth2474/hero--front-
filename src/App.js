import React from 'react'
import KeyPadComponent from './components/keypad'
import './App.css'
import ResultComponent from './components/result'
import TranslateComponent from './components/translate'
import {hero} from './api/index'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
      translate:'',
      data: []
    }
  }
  async componentDidMount() {
    
    let match = await hero()
    this.setState({data: match})
 
  }
  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }
    else if(button === "CE"){
      this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};
  calculate = () => {
    try {
        // this.setState({
        //     // eslint-disable-next-line
        //     result: (eval(this.state.result) || "" ) + ""
        // })
        for (let element in this.state.data) {
          if (this.state.result === element) {
            this.setState({translate: this.state.data[element]})
          }

        }
        
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
  };
  
  reset = () => {
    this.setState({
        result: ""
    })
};

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };
  
  
  render(){ 
    
    
    return (
      <div>
          <div className="calculator-body">
              <h1>Dial</h1>
              <TranslateComponent translate = {this.state.translate} />
              <ResultComponent result={this.state.result}/>
              <KeyPadComponent onClick={this.onClick}/>
          </div>
      </div>
  );
  }
}

export default App;
