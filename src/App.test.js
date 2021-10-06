import React from "react"
import {render, fireEvent, screen, cleanup, waitFor} from "./custom-render"
import App from "./App"
import Photos from "./pages/Photos"
import Image from "./components/Image"

afterEach(cleanup)

describe("<App />", () => {
    it("Renders <App /> component correctly", () => {
      const {getByText, getByTestId} = render(<App />)
      expect(getByText(/Pic Some/i)).toBeInTheDocument()
      expect(getByTestId("cartIcon")).toBeInTheDocument()
      expect(getByTestId("photos")).toBeInTheDocument()
    });
});


describe("<Image />", () => {
    it("Renders <Image /> component and hovering works", () => {
        const img = {id:"1", url:"http:image", isFavorite:false}
        const {getByTestId, queryByTestId} = render(<Image key={img.id} img={img}/>)
        
        expect(getByTestId("image")).toBeInTheDocument()

        fireEvent.mouseOver(screen.getByTestId("image"))
        expect(getByTestId("heartline")).toBeInTheDocument()
        expect(getByTestId("cartline")).toBeInTheDocument()

        fireEvent.mouseOut(screen.getByTestId("image"))
        expect(queryByTestId("heartline")).not.toBeInTheDocument()
        expect(queryByTestId("cartline")).not.toBeInTheDocument()
    })
})

describe("<Image />", () => {
    it("toggles cart icon on click", () => {
        const img = {id:"1", url:"http:image", isFavorite:false}
        render(<Image key={img.id} img={img}/>)
        
        fireEvent.mouseOver(screen.getByTestId("image"))
        fireEvent.click(screen.getByTestId("cartline"))

        expect(screen.getByTestId("cartfill")).toBeInTheDocument()
    })
})

describe("<Image />", () => {
    it("toggles favorite icon on click", () => {
        const img = {id:"1", url:"http:image", isFavorite:false}
        render(<Image key={img.id} img={img}/>)
        
        fireEvent.mouseOver(screen.getByTestId("image"))
        fireEvent.click(screen.getByTestId("heartline"))
        fireEvent.click(screen.getByTestId("cartline"))

        expect(screen.getByTestId("heartfill")).toBeInTheDocument()
    })
})