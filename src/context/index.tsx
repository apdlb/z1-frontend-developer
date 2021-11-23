import { createContext, useMemo, useState } from 'react';
import { LastDocumentProcessed } from '../model/evaluation';

interface IContextProps {
  lastDocumentProcessed?: LastDocumentProcessed;
  setLastDocumentProcessed?: (value?: LastDocumentProcessed) => void;
}

const initialContext: IContextProps = {};

const Context = createContext<IContextProps>(initialContext);

const ContextProvider: React.FC = props => {
  const { children } = props;
  const [lastDocumentProcessed, setLastDocumentProcessed] =
    useState<LastDocumentProcessed>();

  const value = useMemo(() => {
    return {
      lastDocumentProcessed,
      setLastDocumentProcessed,
    };
  }, [lastDocumentProcessed]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
