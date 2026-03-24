import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
const apiUrl = 'https://fakestoreapi.com/products'
import 'ldrs/ring'




export default function PoductPage() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const currentId = parseInt(id)

    function fetchProducts(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })
    }

    function navigateProducts(id) {
        navigate(`/ProductPage/${id}`)
    }
    useEffect(() => {
        fetchProducts(`${apiUrl}/${id}`)
    }, [id])



    return (
        <div className="container mt-5">
            {product ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '400px' }} />
                        </div>
                        <div className="col-md-6">
                            <h1>{product.title}</h1>
                            <p className='fs-5'>{product.description}</p>
                            <h2>${product.price}</h2>
                        </div>
                    </div>
                    <div className="navigation-btns d-flex justify-content-between">
                        <button className='btn btn-outline-dark btn-lg rounded-circle' onClick={() => navigateProducts(currentId - 1)}><i className="bi bi-chevron-left"></i></button>
                        <button className='btn btn-outline-dark btn-lg rounded-circle' onClick={() => navigateProducts(currentId + 1)}><i className="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <l-ring size='60' color="coral"></l-ring>
                    <p>Caricamento prodotto in corso...</p>
                </div>
            )}
        </div>
    );
}