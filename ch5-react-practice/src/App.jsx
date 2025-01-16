import React, { Component } from 'react';
import './App.css';
import ScrollBox from './component/ScrollBox';

class App extends Component {
  state = {
    scrolltop: 0,
    color: 'black',
  };

  // 문제 3: 스크롤 박스의 현재 스크롤 위치 표시하기 스크롤 박스의 현재 스크롤 위치를 state 에 할당 ref.method 로 가져옴
  // 문제 4: 스크롤 위치에 따라 배경색 변경
  handleScroll = () => {
    this.setState({ scrolltop: this.scrollBox.handleScroll() });
  };

  render() {
    return (
      <>
        <h1>CH5. ref DOM 에 이름달기</h1>
        <ScrollBox
          ref={(ref) => (this.scrollBox = ref)}
          // 문제 3: 스크롤 박스의 현재 스크롤 위치 표시하기 onScroll 을 props 로 하위컴포넌트에 전달하며 동시에 이벤트리스너로 사용
          onScroll={this.handleScroll}
        />
        {/* 이렇게 컴포넌트에 ref 를 달면 부모 컴포넌트에서 ref 단 컴포넌트의 메서드를 사용할 수 있음 */}
        <button onClick={() => this.scrollBox.scrollToTop()}>위로</button>
        <button onClick={() => this.scrollBox.scrollToBottom()}>아래로</button>
        <h3>{this.state.scrolltop}</h3>
      </>
    );
  }
}

export default App;
