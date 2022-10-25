import React from "react";
import { render } from "@testing-library/react";
import AppProvider from "../context/AppProvider";


function renderWithContext(children) {
    return (
      render(
        <AppProvider>
            { children }
        </AppProvider>
     )
    )
}
export default renderWithContext;