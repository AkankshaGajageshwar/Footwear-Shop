import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addProductToCart } from "../state/cartSlice";
import { useDispatch } from 'react-redux';

export default function Allproducts() {

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  function fetchData() {
    axios.get("https://664469426c6a6565870a48dd.mockapi.io/footwear")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
  };

  useEffect(() => {
    fetchData();
  }, [])

  function productToCart(e, product) {
    e.preventDefault();
    console.log(product);

    const cartProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      mrp: product.mrp,
      quantity: 1
    };

    console.log(cartProduct);
    dispatch(addProductToCart(cartProduct))
  }


  return (
    <div>

      <div class="colorlib-product">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
          </div>
          <div className="row row-pb-md">
  {data.map((product) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
        <div className="card h-100">
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.title}</h5>
            <h5 className="card-title">₹ {product.price} /-</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button
              onClick={(e) => productToCart(e, product)}
              className="btn btn-primary mt-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>

          <div class="row">
            <div class="col-md-12 text-center">
              <p><a href="#" class="btn btn-primary btn-lg">Shop All Products</a></p>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}
