import { Skeleton } from '@mui/material';

export const Plug = ({ num }) => {
  let markup = [];
  for (let i = 1; i <= num; i += 1) {
    markup.push(
      <Skeleton
        key={i}
        variant="rectangular"
        width={300}
        height={200}
      ></Skeleton>
    );
  }
  return markup;
};
