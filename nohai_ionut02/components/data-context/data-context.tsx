import React, { useContext } from 'react';

const EnvDataContext = React.createContext<string | null>(null);
export const EnvDataProvider = EnvDataContext.Provider;

export const useEnvData = () => {
  const data = useContext(EnvDataContext);
  return data;
}
