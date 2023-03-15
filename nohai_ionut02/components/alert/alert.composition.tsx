import React from 'react';
import { useEnvData } from '@nohai_ionut02/nohai_ionut02.components.data-context';
import { Alert } from './alert';

export const BasicAlert = () => {

  const value = useEnvData();

  return (
    <Alert>hello world!  {value}</Alert>
  );
}
