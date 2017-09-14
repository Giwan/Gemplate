import React, {Component} from 'react';
import MainStore from '../../store/MainStore';
import MainAction from '../../action/MainAction';

export default class Main2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: MainStore.getTimerState(),
        }

        this.updateTimerState = this.updateTimerState.bind(this);
    }

    componentDidMount() {
        MainStore.addChangeListener(this.updateTimerState);
    }

    componentWillUnmount() {
        MainStore.removeChangeListener(this.updateTimerState);
    }

    updateTimerState() {
        this.setState({
            timer: MainStore.getTimerState(),
        });
    }

    render() {
        return (
            <div>
                <h1>Hello Main2</h1>
                <button onClick={ ()=> MainAction.enable() }>turn on timer component</button>
                {this.state.timer && <Timer currentState={this.state.timer} />}
            </div>
        );
    }
}

class Timer extends Component {
    componentDidMount() {
        window.setTimeout(()=>{
            MainAction.disable();
        }, 5000);
    }

    render() {
        return (<div>Timer</div>);
        if (this.props.currentState) return(<div>Timer</div>);
        else return null;
    };
}
