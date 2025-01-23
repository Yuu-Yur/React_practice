import React from 'react';
import styled from 'styled-components';

const BusanAtt = ({ item }) => {
  const { MAIN_TITLE, GUGUN_NM, ITEMCNTNTS, ADDR1, MAIN_IMG_THUMB } = item;
  const AttCard = styled.div`
    display: flex;
    img {
      max-width: 500px;
      align-self: center;
    }
  `;
  const AttDescription = styled.div`
    display: flex, column;
    margin-left: 5px;
  `;
  return (
    <>
      <hr />
      <AttCard>
        <img src={MAIN_IMG_THUMB} alt="" />
        <AttDescription>
          <div>부산의 관광명소: {MAIN_TITLE}</div>
          <hr />
          <div>설명: {ITEMCNTNTS}</div>
          <hr />
          <div>
            위치, 주소: {GUGUN_NM} {ADDR1}
          </div>
        </AttDescription>
      </AttCard>
    </>
  );
};

export default BusanAtt;
