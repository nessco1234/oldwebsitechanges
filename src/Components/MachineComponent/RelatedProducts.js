import React from 'react'
import ProductCard from '../Product/ProductCard'
import img1 from '../../Assets/images/resource/paper-bag-machine.webp'
const RelatedProducts = (props) => {
    const data=props.data
  return (
    <div className="machinerealtedproducts">
        <div className="machinerelatedproductscomp">
            <h1 className="machinerelatedproductheading">Related <span>Products</span></h1>
            <div className="machineblogsection">
                <ProductCard img={data[0].imglink} heading={data[0].heading} url={props.productlink}/>
                <ProductCard img={data[1].imglink} heading={data[1].heading} url={props.productlink}/>
                <ProductCard img={data[2].imglink} heading={data[2].heading} url={props.productlink}/>
                
            </div>
        </div>
    </div>
  )
}

export default RelatedProducts
