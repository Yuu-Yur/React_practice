import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  // 더미 데이터 추가1
  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 5000; i++) {
      array.push({
        id: i,
        text: `할 일 ${i}`,
        checked: false,
      });
    }
    return array;
  }
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(5001);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      // text: text 가 아니어도 되나?
      text,
      checked: false,
    };
    setTodos((prev) => prev.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  //실습 1: 체크된 항목 모두 삭제, 체크 된 항목 삭제 함수
  const removeAll = useCallback(
    () => setTodos((prev) => prev.filter((todo) => todo.checked !== true)),
    [],
  );

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  // 예제 2: 모든 항목 체크 상태 토글, map 으로 checked 반전
  const onClick = useCallback(() => {
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, checked: !todo.checked })),
    );
  }, []);

  return (
    <>
      <h1>CH11. 최적화</h1>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onClick={onClick}
          removeAll={removeAll}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
