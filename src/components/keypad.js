import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">

                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1<br/> @.?</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2<br/> ABC</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3<br/> DEF</button>
                <br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4<br/>GHI</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5<br/>JKL</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6<br/>MNO</button>
                <br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7<br/>PQRS</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8<br/>TUV</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9<br/>WXYZ</button>
                <br/>


                
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0<br/>zero</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=<br/>send</button>
                <button name=" " onClick={e => this.props.onClick(e.target.name)}>#<br/>space</button>
                <br/>

                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
