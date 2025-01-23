import React from 'react';

const WeatherSample = ({ item }) => {
  const [{ baseDate, baseTime, weatherNm }] = item;
  return (
    <>
      <div>
        현재 시각: {baseDate} {baseTime}
      </div>
      <div>날씨: {weatherNm}</div>
    </>
  );
};

export default WeatherSample;
