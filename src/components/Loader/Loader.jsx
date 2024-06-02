import { RotatingLines } from 'react-loader-spinner';
// import css from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClass=""
      />
      <p>Loading... please wait...</p>
    </div>
  );
};

export default Loader;
