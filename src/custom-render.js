import React from "react"
import {render} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"

import {ContextProvider} from "./Context"

const Wrapper = ({children}) => {
  return (
    <ContextProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </ContextProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {wrapper: Wrapper, ...options })

export * from "@testing-library/react"

export {customRender as render}