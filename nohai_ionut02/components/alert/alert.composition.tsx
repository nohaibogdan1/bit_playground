import React from 'react';
import { Alert } from './alert';
import { useEnvData } from '@nohai_ionut02/nohai_ionut02.components.data-context';

export const BasicAlert = () => {

  const value = useEnvData();

  console.log("value", value);

  return (
    <Alert>hello world!</Alert>
  );
}
