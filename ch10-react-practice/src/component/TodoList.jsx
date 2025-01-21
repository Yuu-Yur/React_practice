import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { useState } from 'react';

const TodoList = ({ todos, onRemove, onToggle, onClick }) => {
  // 예제 1: 체크된 항목 개수 표시하기, reduce 사용해서 총 갯수 세기
  const checkedNum = todos.reduce((acc, todo) => {
    if (todo.checked) acc += 1;
    return acc;
  }, 0);
  const checkedNum2 = todos.filter((todo) => todo.checked === true).length;
  // 예제 3: 필터링된 할 일 목록 표시 (체크/미체크), useState
  const [checked, setChecked] = useState(false);
  return (
    <>
      {/*예제 1: 체크된 항목 개수 표시하기, 출력
         예제 2: 모든 항목 체크 상태 토글, 버튼
         예제 3: 필터링된 할 일 목록 표시 (체크/미체크), 할 일 목록 필터링 표시 전환 버튼*/}
      <div className="practice">
        <button onClick={onClick}>반전 버튼</button>
        <button onClick={() => setChecked(!checked)}>
          {checked ? '미달성 목표' : '달성 목표'}
        </button>
        <div className="checkedNum">완료한 일정 : {checkedNum}</div>
      </div>
      <div className="TodoList">
        {todos.map(
          (todo) =>
            // 예제 3: 필터링된 할 일 목록 표시 (체크/미체크), checked state 따라 필터링
            (checked ? todo.checked : !todo.checked) && (
              <TodoListItem
                todo={todo}
                key={todo.id}
                onRemove={onRemove}
                onToggle={onToggle}
              />
            ),
        )}
      </div>
    </>
  );
};

export default TodoList;
