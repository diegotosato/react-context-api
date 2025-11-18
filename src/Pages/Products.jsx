import { useEffect, useState } from "react"
import Card from '../Components/Card'
import { useNavigate } from "react-router-dom"
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'


import { useContext } from "react"
import BudgetContext from "../Contexts/BudgetContext"

export default function Products() {


    // const [isLoading, setIsLoading] = useState(null)

    // const navigate = useNavigate()

    const { products, budgetMode, setBudgetMode } = useContext(BudgetContext)


    function handleClick(array) {
        setBudgetMode(!budgetMode)

        if (budgetMode) {
            const filtered = array.filter(item => item.price <= 30)
            setProducts(filtered)
        }
    }

    return (
        <>


            <div className="container">

                {/* {
                    (isLoading === true) &&
                    <div className="d-flex justify-content-center vh-100 mt-5">
                        <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" className="mx-auto" />
                    </div>
                } */}

                <h1 className="my-4">Prodotti</h1>


                <div className="row row-cols-1 row-cols-sm-1 row-cols-xl-2 g-5">

                    {
                        products.map((product, index) => (
                            <div key={index} className="col">
                                <Card product={product} />
                            </div>
                        ))
                    }

                </div>

            </div>

        </>
    )
}