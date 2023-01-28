import { Circles } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spiner>
      <Circles
        height="80"
        width="80"
        color="#d0d2fcb2"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Spiner>
  );
};

export default Loader;
