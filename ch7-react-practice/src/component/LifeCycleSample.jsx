import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상:', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* 에러를 발생시키는 부분을 주석 처리 또는 수정 */}
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;

// 실습 예제 1: 랜덤 색상 변경과 LifeCycle 메서드 확인
// 랜덤 색상을 누르면 App의 state 가 변경됨
// 따라서 App이 업데이트됨
// 이 App 의 state 를 props 로 LifeCycleSample 에 전달
// LifeCycleSample 입장에선 props 로 color 를 받음
// getDerivedStateFromProps 로 props 의 color 를 state 에 복사
// shouldComponentUpdate 로 nextProps 와 nextState 를 받아 업데이트 필요성 검토
// render
// 필요에 의해 getSnapshotBeforeUpdate 로 prevProps, prevState 를 받아 원하는 상태를 반환
// 이것을 snapshot 으로 받는 componentDidUpdate 에서 추가 작업

// 실습 예제 2: 숫자 증가와 렌더링 조건
// shouldComponentUpddate 에서 state가 뒷자리가 4가 아닐 시(%10 !== 4)만 true 반환
// 4->3으로만 바꾸면 됨

// 실습 예제 3: getSnapshotBeforeUpdate 활용
