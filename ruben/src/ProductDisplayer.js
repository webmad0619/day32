import React from 'react';
import Product from './Product';

export default class ProductDisplayer extends React.Component {
    render() {
        return (
            <section className="productDisplayer">
                {
                    this.props.products.map((product, idx) =>
                        <Product
                            name={product.name}
                            imgSrc={product.imgSrc}
                            price={product.price}
                            isOffer={product.isOffer}
                            key={idx}
                        />
                    )
                }
            </section>
        )
    }
}