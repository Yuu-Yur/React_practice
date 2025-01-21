import { IoMdAddCircleOutline } from 'react-icons/io';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => setValue(e.target.value), []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [value, onInsert],
  );

  return (
    // onSubmit 은 form 의 기능, button 은 onClick같은것을 씀
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <IoMdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoInsert;
