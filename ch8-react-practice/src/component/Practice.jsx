import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  // 실습 예제 2: 평균값 계산 최적화 확인 여기에 로그로 확인 가능
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가
  return sum / numbers.length;
};

const Practice = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  //추가1
  const inputEl = useRef(null);
  const [nextIndex, setNextIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    // 실습 예제 1: 숫자 입력 제한 그래서 추가 시 숫자인지 확인함
    // 실습 예제 3: 입력값 초기화 조건 추가 number < 1 어차피 parseInt 할 것이기 때문에
    if (number === '' || isNaN(number) || number < 1) return setNumber('');
    // 응용 실습 예제 3: 입력값에 최대/최소 제한 추가
    if (number > 100) {
      setNumber('');
      return alert('1이상 100이하의 숫자를 입력해주세요.');
    }
    const nextList = list.concat({
      index: nextIndex,
      number: parseInt(number, 10),
    });
    console.log(nextIndex);
    setList(nextList);
    setNextIndex(nextIndex + 1);
    setNumber('');
    setLastIndex(list.length);
    console.log(list.length);
    //추가2
    inputEl.current.focus(); // 입력창 포커스
  }, [nextIndex, number, list]); // number 혹은 list가 바뀔 때만 함수 생성

  // 실습 예제 2: 평균값 계산 최적화 확인 이걸 삭제하면  getAverage(list) 를 아래에 써야 하는데 state 가 변경될 때마다 리렌더링되어 getAverage 를 호출 해버린다.
  // 이걸 막기 위해 getAverage(list) 의 값을 메모라이징 하고 이것이 모든 state가 아니라 list 가 변경될 때마다 계산되게 만든다.
  const avg = useMemo(
    () => getAverage(list.map((list) => list.number)),
    [list],
  ); // list가 변경될 때만 평균값 계산

  // 응용 실습 예제 1: 최근 입력값 하이라이트 index 가 가장 큰 것이 가장 최근 입력값이므로 index max 구하기
  // 풀이 : 가장 최근에 추가된 인덱스는 배열.length - 1 state 하나 만들고 setter 에 list.length - 1 아래서 list.index === state 하면 됨
  const max = list.reduce(
    (max, current) => {
      return current.index > max.index ? current : max;
    },
    { index: 0, number: 0 },
  );

  return (
    <div>
      <input
        // 실습 예제 1: 숫자 입력 제한
        // 쉽게 하려면 여기에 type = "number"을 쓰면 되지만 바로 아랫줄의 value={number} 때문에 한글자씩 들어간다.
        value={number}
        onChange={onChange}
        //추가3
        ref={inputEl}
        placeholder="숫자를 입력하세요"
      />
      <button onClick={onInsert}>추가</button>
      <ul style={{ listStyle: 'none' }}>
        {list.map((list) =>
          // 응용 실습 예제 2: 평균값 기준 필터링 삼항연산자로 해결
          list.number > avg ? (
            // 응용 실습 예제 1: 최근 입력값 하이라이트 하이라이트 추가
            lastIndex === list.index ? (
              <li
                key={list.index}
                style={{ backgroundColor: 'black', color: 'white' }}
              >
                {list.number}
              </li>
            ) : (
              <li key={list.index}>{list.number}</li>
            )
          ) : null,
        )}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Practice;
