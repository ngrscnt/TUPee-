import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([])

    function getProducts() {
        fetch("http://localhost:8080/products?_sort=id&_order=desc")
        .then(response => {
            if (response.ok) {
                return response.json()
            }

            throw new Error()
        })
        .then(data => {
            setProducts(data)
        })
        .catch(error => {
            alert("Unable to get the data")
        })
    }

    useEffect(getProducts, [])

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Bili na po kayo!</h2>

            <div className="row mb-3">
                <div className="col">
                     <Link className="btn btn-danger me-1" to="/admin/products/create" role="button">Create Product</Link>
                     <button type="button" className="btn btn-outline-secondary"
                     onClick={getProducts}>Refresh</button>
                </div>
                <div className="col">

                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Seller</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.seller}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td><img src={"http://localhost:8080/images/" + product.imageFilename}
                                        width="100" alt="..."/></td>
                                    <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className='btn btn-secondary btn-sm me-1'
                                            to={"/admin/products/edit/" + product.id}>Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }  
                </tbody>
            </table>
        </div>
    )
}