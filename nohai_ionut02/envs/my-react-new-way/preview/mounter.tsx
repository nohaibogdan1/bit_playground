import React from 'react';
import { createMounter } from '@teambit/react.mounter';
import { EnvDataProvider } from '@nohai_ionut02/nohai_ionut02.components.data-context';

/**
 * use the mounter to inject and wrap your component previews
 * with common needs like [routing](), [theming]() and [data fetching]().
 */
// eslint-disable-next-line react/prop-types
export function MyReactProvider({ children }) {
  return (
    <EnvDataProvider value={"hello"}>
      {children}
    </EnvDataProvider>
  );
}

/**
 * to replace that mounter component for different purposes, just return a function
 * that uses ReactDOM to render a node to a div.
 */
// @ts-ignore
export default createMounter(MyReactProvider) as any;