import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./components/Home"
import Products from "./components/Products"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
