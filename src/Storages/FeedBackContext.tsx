import {createContext, useState, useContext} from 'react';

type BooleanContextProps = {
  booleanState: boolean;
  setBooleanState: (value: boolean) => void;
};

export const BooleanContext = createContext<BooleanContextProps>({
  booleanState: false,
  setBooleanState: () => {},
});

export const BooleanProvider: React.FC = ({children}: any) => {
  const [booleanState, setBooleanState] = useState<boolean>(false);

  return (
    <BooleanContext.Provider value={{booleanState, setBooleanState}}>
      {children}
    </BooleanContext.Provider>
  );
};
