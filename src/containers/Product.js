import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div class="ui grid">
                <div className="four column wide" key={id}>
                    <Link to={`/product/${id}`}>
                        <div className="ui link cards">
                            <div className="card">
                                <div className="image">
                                    <img src={image} alt={title} style={{ height: "300px" }} />
                                </div>
                                <div className="content">
                                    <div className="header">{title}</div>
                                    <div className="meta price">$ {price}</div>
                                    <div className="meta">{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <Fragment>
            {renderList}
        </Fragment>
    )
}

export default Product
