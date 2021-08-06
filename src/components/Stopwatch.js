import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    // Life Cycle Hook: 
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    //Keeps track of time for stopwatch
    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    // Function switches state: setState to the opposite of wehat it  currently is. So "OnClick" will switch the button name everytime 
    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() })
        }
    }

    handleReset = () => {
        this.setState({ elapsedTime: 0 });
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000)

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {seconds}
                </span>
                <button onClick={this.handleStopwatch}> {/* If isRunning = true, show Stop button, if false, show start button */}
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


export default Stopwatch;