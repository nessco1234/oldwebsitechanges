import React from 'react'
import ProductCard from '../Product/ProductCard'
import img1 from '../../Assets/images/resource/paper-bag-machine.webp'
const RelatedProducts = (props) => {
  const data = props.data
  return (
    <section className="machinerealtedproducts">
      <div className="machinerelatedproductscomp">
        <h1 className="machinerelatedproductheading">Related <span>Products</span></h1>
        <div className="machineblogsection">
          {
            data.map(obj => (
              <ProductCard img={obj.imglink} heading={obj.heading} url={obj.productlink} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
