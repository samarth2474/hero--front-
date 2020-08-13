
import React, {Component} from 'react';

class TranslateComponent extends Component {


    render() {
        let {translate} = this.props;
        return (
            <div className="translate">
                <p>{translate}</p>
            </div>
    )
        ;
    }
}


export default TranslateComponent;