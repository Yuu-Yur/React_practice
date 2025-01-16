import React from 'react';
import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="새 항목 입력"
      />
      <button
        onClick={() => {
          const newNames = names.concat({ id: nextId, text: inputText });
          setNames(newNames);
          setNextId(nextId + 1);
          setInputText('');
        }}
      >
        추가
      </button>
      <ul>{namesList}</ul>
    </div>
  );
};

// const IterationSample = () => {
//   const names = ['눈사람', '얼음', '눈', '바람'];
//   const namesList = names.map((name, index) => <li key={index}> {name} </li>);
//   return (
//     <>
//       <ul>{namesList}</ul>
//     </>
//   );
// };

// const IterationSample = () => {
//   return (
//     <ul>
//       <li>눈사람</li>
//       <li>얼음</li>
//       <li>눈</li>
//       <li>바람</li>
//     </ul>
//   );
// };

export default IterationSample;
