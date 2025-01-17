import { Component } from 'react';
import './App.css';
import LifeCycleSample from './component/LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  // getDerivedStateFromProps 는
  // props 가 변경될 때만 호출됨, state 의 변경으로 업데이트가 일어날땐 호출되지 않음

  shouldComponentUpdate(nextProps, nextState) {
    console.log('부모의 shouldComponentUpdate', nextProps, nextState);
    return nextProps || nextState;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('부모의 getSnapshotBeforeUpdate', prevProps, prevState);
    if (this.state.color !== prevState.color) return prevState.color;
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot)
      console.log(
        '부모의 snapshot 이 있기에 componentDidUpdate 호출',
        prevState,
        snapshot,
      );
  }

  render() {
    console.log('부모의 render 호출');
    return (
      <>
        <h1>CH7.life cycle method</h1>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
