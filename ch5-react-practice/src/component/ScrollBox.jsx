import React, { Component } from 'react';

class ScrollBox extends Component {
  state = {
    scrolltop: 0,
  };
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
    this.setState({ scrolltop: this.box.scrollTop });
  };
  scrollToTop = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = 0;
    this.setState({ scrolltop: this.box.scrollTop });
  };
  // 문제 3: 스크롤 박스의 현재 스크롤 위치 표시하기 scrollTop 을 반환하는 메서드
  // 문제 4: 스크롤 위치에 따라 배경색 변경 배경색을 parameter 로 받아 반환하는 메서드
  handleScroll = () => {
    this.setState({ scrolltop: this.box.scrollTop });
    return this.state.scrolltop;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background:
        this.state.scrolltop > 50
          ? this.state.scrolltop > 150
            ? this.state.scrolltop > 250
              ? 'linear-gradient(white, green)'
              : 'linear-gradient(white, blue)'
            : 'linear-gradient(white, black)'
          : 'linear-gradient(white, red)',
    };
    return (
      <div
        style={style}
        // this.box 를 ref 로 지정, 콜백함수 방식
        ref={(ref) => {
          this.box = ref;
        }}
        // 문제 3: 스크롤 박스의 현재 스크롤 위치 표시하기 받은 onScroll 을 여기 onScroll 에 바인딩
        onScroll={this.props.onScroll}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
