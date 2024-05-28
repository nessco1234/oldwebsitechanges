import React from 'react'
import ProductCard from '../Product/ProductCard'
const RelatedProducts = (props) => {
  const data = props.data
  return (
    <section className="machinerealtedproducts">
      <div className="machinerelatedproductscomp">
        <h2 className="machinerelatedproductheading">Related <span>Products</span></h2>
        <div className="machineblogsection">
          {
            data.map((obj,key) => (
              <ProductCard key={key} img={obj.imglink} heading={obj.heading} url={obj.productlink} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
