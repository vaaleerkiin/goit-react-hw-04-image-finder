import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { AiOutlineArrowUp } from 'react-icons/ai';
export const Wrap = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1440px;
  padding-bottom: 68px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;

  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 16px;
  padding: 16px;
`;
export const LoadMore = styled(Button)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;
export const ArrowTop = styled(AiOutlineArrowUp)`
  fill: #42a5f5;
  width: 50px;
  height: 50px;
`;
export const ArrowBtn = styled(Button)`
  position: fixed;
  bottom: 25px;
  right: 35px;
`;
