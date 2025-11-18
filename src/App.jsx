import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import AboutUs from './Pages/AboutUs'
import DefaultLayout from "./Layout/DefaultLayout"
import FocusProduct from "./Pages/FocusProduct"
import ErrorPage from "./Pages/ErrorPage"

import { useState, useEffect } from "react"

import BudgetContext from './Contexts/BudgetContext'

function App() {


  const [budgetMode, setBudgetMode] = useState(false)

  const [maxPrice, setMaxPrice] = useState(null)
  const [number, setNumber] = useState('')


  // const productsEndpoint = 'https://fakestoreapi.com/products'

  // function handleGet() {
  //   axios.get(productsEndpoint)
  //     .then(res => {
  //       setIsLoading(true)
  //       setProducts(res.data)

  //     })
  //     .catch(err => {
  //       navigate('/error_page')

  //       if (err.status === 404) {
  //         navigate('/error_page')

  //       }
  //     })
  //     .finally(onfinally => {
  //       setIsLoading(false)
  //     })
  // }

  // useEffect(handleGet, [])

  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode, maxPrice, setMaxPrice, number, setNumber }}>

        <BrowserRouter>

          <Routes>

            <Route element={<DefaultLayout />}>

              <Route path="/" element={<HomePage />} />

              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<FocusProduct />} />

              <Route path="/about_us" element={<AboutUs />} />

            </Route>
            <Route path="/error_page" element={<ErrorPage />} />

          </Routes>

        </BrowserRouter>

      </BudgetContext.Provider>
    </>
  )
}

export default App
