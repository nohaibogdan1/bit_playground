import React from "react";
import { EnvDataProvider } from "@nohai_ionut02/nohai_ionut02.components.data-context";

const ThemeProvider = ({children}) => {
    return (
        <EnvDataProvider value={"hello"}>
            {children}
        </EnvDataProvider>
    )
};

export default ThemeProvider;
