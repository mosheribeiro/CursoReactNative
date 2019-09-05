import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class MeuComponente extends React.Component {
    render() {
        var a = 1;
        const b = 2;
        let c = "opa";
        return (
            <div>
                {a}
                <MeuComponente2 minhaProp1="1" />
                <MeuComponente2 minhaProp1="2" />
                <MeuComponente2 minhaProp1="3" />
            </div>
        )
    }
}

class MeuComponente2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            reset: false,
        }
    }


    render() {

        return <button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
           // alert(this.state.count)
        }}> Meu componente {this.state.count}</button>
    }
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
