import { Dialog } from '@mui/material';
import styled from '@emotion/styled';
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Backdrop = styled(Dialog)`
  div:has(img) {
    border-radius: 8px;
    overflow: hidden;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
