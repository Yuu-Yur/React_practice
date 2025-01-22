import TodoListItem from './TodoListItem';
import './TodoList.scss';
import React, { useCallback, useState } from 'react';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle, onClick, removeAll }) => {
  // 예제 1: 체크된 항목 개수 표시하기, reduce 사용해서 총 갯수 세기
  const checkedNum = todos.reduce((acc, todo) => {
    if (todo.checked) acc += 1;
    return acc;
  }, 0);
  // const checkedNum2 = todos.filter((todo) => todo.checked === true).length;
  // 예제 3: 필터링된 할 일 목록 표시 (체크/미체크), useState
  const [checked, setChecked] = useState(false);

  // 실습 2: 할 일 검색 기능 구현, 검색값을 state 에 set, 배열을 filter 영문 고려하면 전부 소문자로 변환 필요 있음
  const [value, setValue] = useState('');
  const filteredTodos = todos.filter(
    (todo) =>
      (checked ? todo.checked : !todo.checked) &&
      todo.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
  );

  const rowRenderer = useCallback(
    // 실습 2: 할 일 검색 기능 구현, rowRender 에 필터링된 배열으로 렌더링
    ({ index, key, style }) => {
      const todo = filteredTodos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, filteredTodos],
  );

  return (
    <>
      {/*예제 1: 체크된 항목 개수 표시하기, 출력
         예제 2: 모든 항목 체크 상태 토글, 버튼
         예제 3: 필터링된 할 일 목록 표시 (체크/미체크), 할 일 목록 필터링 표시 전환 버튼*/}
      <div className="practice">
        <button onClick={onClick}>반전 버튼</button>
        <button onClick={() => setChecked((prev) => !prev)}>
          {checked ? '미달성 목표' : '달성 목표'}
        </button>
        <button onClick={removeAll}>완료 항목 삭제</button>
        <div className="checkedNum">완료한 일정 : {checkedNum}</div>
      </div>
      <List
        // 실습 2: 할 일 검색 기능 구현, rowCount 와 list 에 필터링 된 배열
        className="TodoList"
        width={512} // 전체 너비
        height={513} // 전체 높이
        rowCount={filteredTodos.length} // 항목 개수
        rowHeight={57} // 각 항목의 높이
        rowRenderer={rowRenderer} // 항목을 렌더링하는 함수
        list={filteredTodos} // 렌더링할 데이터 배열
        style={{ outline: 'none' }} // 기본 outline 스타일 제거
      />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="검색어를 입력해주세요"
      />
    </>
  );
};

export default React.memo(TodoList);
