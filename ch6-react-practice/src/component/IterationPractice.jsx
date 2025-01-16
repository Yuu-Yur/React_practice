import React, { createRef, useState } from 'react';

const IterationPractice = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 ID
  // 응용문제 1: 항목 수정 기능 추가
  // 응용문제 2: 항목 정렬 기능 추가
  // 응용문제 3: 삭제 취소 기능 추가 를 위한 메뉴 보이는 이벤트 핸들러, 메뉴 클릭 시 핸들러, 각각에 필요한 state
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [selected, setSelected] = useState({ id: 0, text: '' });
  const [sort, setSort] = useState('asc');
  const [deleted, setDeleted] = useState({ id: 0, text: '' });
  const handleContextMenu = (e, id, text) => {
    e.preventDefault();
    setMenuPosition({
      top: e.clientY,
      left: e.clientX,
    });
    setSelected({ id: id, text: text });
    setShowMenu(true);
  };
  const handleMenu = (menu) => {
    switch (menu) {
      case '수정':
        onUpdate();
        break;
      case '삭제':
        onRemove();
        break;
      case '정렬':
        onSort();
        break;
      case '삭제 취소':
        onUndelete();
        break;
    }
    setShowMenu(false);
  };

  //응용문제 1: 항목 수정 기능 추가
  const onUpdate = () => {
    if (
      names.some((name) => name.text === inputText) ||
      inputText.trim() === ''
    ) {
      return;
    }
    onRemove();
    onClick();
  };
  // 응용문제 2: 항목 정렬 기능 추가
  const onSort = () => {
    let sortedNames;
    switch (sort) {
      case 'asc':
        sortedNames = names.sort((a, b) => b.id - a.id);
        setSort('desc');
        setNames(sortedNames);
        break;
      case 'desc':
        sortedNames = names.sort((a, b) => a.id - b.id);
        setSort('asc');
        setNames(sortedNames);
        break;
    }
  };
  // 응용문제 3: 삭제 취소 기능 추가
  const onUndelete = () => {
    if (deleted.id === 0) return;
    setNames((prevNames) =>
      prevNames.concat({ id: deleted.id, text: deleted.text }),
    );
    setDeleted({ id: 0, text: '' });
  };

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    // 문제 1: 중복 항목 추가 방지 기능 구현 객체이므로 include 보다는 some() 사용
    // 문제 2: 항목 추가 시 공백 입력 방지
    if (
      names.some((name) => name.text === inputText) ||
      inputText.trim() === ''
    ) {
      return;
    }
    // const nextNames = names.concat({
    //   id: nextId, // nextId 값을 id로 설정
    //   text: inputText,
    // });

    //응용문제 1: 항목 수정 기능 추가 에서 연속된 setState 호출을 정리하기 위해 prev로 변환
    setNextId(nextId + 1); // nextId 값을 1 증가
    setNames((prevNames) =>
      prevNames.concat({
        id: nextId,
        text: inputText,
      }),
    ); // names 값을 업데이트
    setInputText(''); // inputText를 비운다
  };

  const onRemove = () => {
    if (!confirm('삭제하시겠습니까?')) return;
    const nextNames = names.filter((name) => name.id !== selected.id);
    setDeleted({ id: selected.id, text: selected.text });
    setNames(nextNames);
  };

  // 문제 3: 항목의 ID 값을 클릭하여 확인하기 이벤트 핸들러
  const handleClick = (id) => {
    alert(id);
  };

  const namesList = names.map((name) => (
    <li
      key={name.id}
      //   onDoubleClick={() => onRemove(name.id)}
      // 문제 3: 항목의 ID 값을 클릭하여 확인하기 이벤트 리스너
      onClick={() => handleClick(name.id)}
      onContextMenu={(e) => handleContextMenu(e, name.id, name.text)}
    >
      {name.text}
    </li>
  ));

  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="수정하거나 추가할 항목을 입력하세요"
      />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>

      {/*   응용문제 1: 항목 수정 기능 추가
            응용문제 2: 항목 정렬 기능 추가
            응용문제 3: 삭제 취소 기능 추가 를 위한 메뉴*/}
      {showMenu && (
        <>
          <ul
            style={{
              position: 'absolute',
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              listStyleType: 'none',
              margin: 0,
              padding: '10px',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            <li onClick={(e) => handleMenu(e.target.innerText)}>수정</li>
            <li onClick={(e) => handleMenu(e.target.innerText)}>삭제</li>
            <li onClick={(e) => handleMenu(e.target.innerText)}>정렬</li>
            <li onClick={(e) => handleMenu(e.target.innerText)}>삭제 취소</li>
          </ul>
        </>
      )}
    </>
  );
};

export default IterationPractice;
