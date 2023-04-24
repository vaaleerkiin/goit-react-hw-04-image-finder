import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

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
Plug.propTypes = { num: PropTypes.number.isRequired };
