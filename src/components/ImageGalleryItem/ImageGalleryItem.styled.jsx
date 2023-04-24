import styled from '@emotion/styled';
export const Wrap = styled.li`
  max-width: 300px;
  width: 100%;
  height: 200px;
  background-color: #00000018;
  border-radius: 8px;
  overflow: hidden;

  display: flex;

  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
