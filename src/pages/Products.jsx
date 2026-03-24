import { Link } from "react-router-dom";
import { useState, useEffect, use } from "react";
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";


const apiUrl = 'https://fakestoreapi.com/products'

export default function Products(){
    const [products, setProducts] = useState([])
    const budgetMode = useContext(BudgetContext)
    
    useEffect(()=>{
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {

                console.log(data);
                setProducts(data)

            })
    },[])


    return  (
        <>
            
            <div className="product-page">
                <div className="container">
                    <header className="header"><h1 className="text-center py-3">Products</h1></header>
                    <div className="row">
                        {products.map(product => (
                            <div key={product.id} className="col-md-6 col-lg-3" >
                                <div className="card mb-4 p-2">
                                    <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate">{product.title}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <Link className="fw-bold btn" to={`/ProductPage/${product.id}`}>More details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )


    
}