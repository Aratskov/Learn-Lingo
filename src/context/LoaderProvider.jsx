import { createContext } from 'react';
import { useSelector } from 'react-redux';
import { Dna } from 'react-loader-spinner';

import { BackdropModal } from '../components/BackdropModal/BackdropModal';
import { selectIsLoading } from '../redux/loader/loaderSelect';


const LoaderContext = createContext();

const Loader = () => {
  return (
    <BackdropModal>
      <Dna
        visible={true}
        height="280"
        width="280"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </BackdropModal>
  );
};

export const LoaderProvider = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <LoaderContext.Provider value={isLoading}>
      <>{children}</>
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};
