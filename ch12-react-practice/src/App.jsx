import { useCallback, useRef, useState } from 'react';
import { produce } from 'immer';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import cn from 'classnames';
import './App.css';

const App = () => {
  const nextId = useRef(1); // 다음 id를 저장하는 useRef
  const [form, setForm] = useState({ name: '', username: '' });
  // 입력 폼 상태
  const [data, setData] = useState({
    array: [], // 항목 배열
    uselessValue: null, // 필요 없는 값 (유지)
  });

  // 입력값 변경을 처리하는 함수
  const onChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm(
      produce((draft) => {
        draft[name] = value;
      }),
    );

    // setForm(
    //   produce(form, (draft) => {
    //     draft[name] = value;
    //   }),
    // );

    // setForm(
    //     {
    //     ...form,
    //     [name]: value, // name 속성에 따라 값 변경
    //   }
    // );
  }, []);

  // 폼 제출을 처리하는 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 새로고침 방지
      const info = {
        id: nextId.current, // 고유 id
        name: form.name,
        username: form.username,
        // 문제 2: Todo 항목 상태 표시, 추가 데이터에 todo 기본값 추가
        todo: false,
      };

      // 배열에 새 항목 추가
      setData(
        produce((draft) => {
          // 문제 1: Todo 항목 중복 방지, if 로 찾고 없으면 push
          // 문제 3: 입력 값 유효성 검사, name, username 둘 다 있으면 push
          if (
            info.name.trim() &&
            info.username.trim() &&
            draft.array.findIndex((a) => a.username === info.username) == -1
          )
            draft.array.push(info);
        }),
        //   {
        //   ...data,
        //   array: data.array.concat(info),
        // }
      );

      // 폼 초기화
      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1; // id 증가
    },
    [form.name, form.username],
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        const index = draft.array.findIndex((a) => a.id === id);
        if (index !== -1) draft.array.splice(index, 1);
      }),
      //   {
      //   ...data,
      //   array: data.array.filter((info) => info.id !== id), // id가 일치하지 않는 항목만 유지
      // }
    );
  }, []);

  // 문제 2: Todo 항목 상태 표시, 토글함수
  const handleToggle = useCallback(
    (id) =>
      setData(
        produce((draft) => {
          const index = draft.array.findIndex((a) => a.id === id);
          if (index !== -1) {
            draft.array[index].todo = !draft.array[index].todo;
          }
        }),
      ),
    [],
  );

  return (
    <div>
      <h1>CH.12 immer 로 불변성 유지</h1>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li
              key={info.id}
              onClick={() => onRemove(info.id)}
              onAuxClick={() => handleToggle(info.id)}
            >
              {/* 문제 2: Todo 항목 상태 표시, 스타일 추가 */}
              <div className={cn('checkbox', { checked: info.todo })}>
                {info.todo ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                {info.username} ({info.name})
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
