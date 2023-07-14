import { MutatingDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderBox>
      <MutatingDots
        height="100"
        width="100"
        color="#ef0060"
        secondaryColor="#ffffff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderBox>
  );
}
