import React, { useState } from 'react';
// import './ProductFilter.css'; // Import CSS file for styling
import '../Styles/Product.css'
import ProductCard from '../Components/Product/ProductCard';
import img1 from '../Assets/images/resource/paper-bag-machine.webp'
function ProductFilter({ products }) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    // Function to filter products based on the selected filter
    const filteredProducts = selectedFilter !== 'All'
        ? products.filter(product => product.type === selectedFilter)
        : products;

    return (
        <div className='productpage'>
            <div className="productpagecontainer">
                <div className="productpagebtncontainer">
                    <button className='productfilterbtn' style={selectedFilter === 'All' ? { backgroundColor: '#483d73', color: '#fff' } : {}} onClick={() => setSelectedFilter('All')}>
                        All
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'papercup' ? { backgroundColor: '#483d73', color: '#fff' } : {}} onClick={() => setSelectedFilter('papercup')}>
                        Paper Cup
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperbag' ? { backgroundColor: '#483d73', color: '#fff' } : {}} onClick={() => setSelectedFilter('paperbag')}>
                        Paper Bag
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperbowl' ? { backgroundColor: '#483d73', color: '#fff' } : {}} onClick={() => setSelectedFilter('paperbowl')}>
                        Paper Bowl
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperstraw' ? { backgroundColor: '#483d73', color: '#fff' } : {}} onClick={() => setSelectedFilter('paperstraw')}>
                        Paper Straw
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperrelated' ? { backgroundColor: '#483d73', color: '#fff' } : {}} onClick={() => setSelectedFilter('paperrelated')}>
                        Paper Related
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'other' ? { backgroundColor: '#483d73', color: '#fff' } : {}} onClick={() => setSelectedFilter('other')}>
                        Other
                    </button>
                </div>
                <ul className='productpagelist'>
                    {filteredProducts.map(product => (
                        <>
                            <ProductCard key={product.id} heading={product.name} url={'/product'} img={img1} />
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const products = [
    { id: 1, name: 'Paper Cultery Machine', type: 'papercup' },
    { id: 1, name: 'Paper Cultery Machine', type: 'papercup' },
    { id: 1, name: 'Paper Cultery Machine', type: 'papercup' },
    { id: 1, name: 'Paper Cultery Machine', type: 'papercup' },
    { id: 1, name: 'Paper Cultery Machine', type: 'papercup' },
    { id: 1, name: 'Paper Cultery Machine', type: 'papercup' },
    { id: 2, name: 'Product 2', type: 'paperbag' },
    { id: 3, name: 'Product 3', type: 'paperbowl' },
    { id: 4, name: 'Product 4', type: 'paperstraw' },
    { id: 5, name: 'Product 5', type: 'paperrelated' },
    { id: 6, name: 'Product 6', type: 'other' },
];

function App() {
    return (
        <div>
            <ProductFilter products={products} />
        </div>
    );
}

export default App;
