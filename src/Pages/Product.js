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
    { id: 1, name: 'Disposable Cup Making Machine', type: 'papercup',url:'/' },
    { id: 2, name: 'High Speed Paper Cup Machine', type: 'papercup',url:'/' },
    { id: 3, name: 'Fully Automatic Cup Making Machine', type: 'papercup',url:'/' },
    { id: 4, name: 'Paper Bag Making Machine', type: 'papercup',url:'/' },
    { id: 5, name: 'Flexo Printing Machine', type: 'papercup',url:'/' },
    { id: 6, name: 'Paper Cultery Machine', type: 'papercup',url:'/' },
    { id: 7, name: 'Paper Container Bowl Machine', type: 'paperbag' ,url:'/' },
    { id: 8, name: 'Paper Food Bag Making Machine', type: 'paperbowl' ,url:'/' },
    { id: 9, name: 'Paper Handle Cup Making Machine', type: 'paperstraw' ,url:'/' },
    { id: 10, name: 'Paper Glass Making Machine', type: 'paperrelated' ,url:'/' },
    { id: 11, name: 'Paper Lid Making Machine', type: 'other' ,url:'/' },
    { id: 12, name: 'Paper Plate Making Machine', type: 'other' ,url:'/' },
    { id: 13, name: 'Paper Straw Making Machine', type: 'other' ,url:'/' },
    { id: 14, name: 'PE Coating Machine', type: 'other' ,url:'/' },
    { id: 15, name: 'Ripple Wall Cup Machine', type: 'other' ,url:'/' },
    { id: 16, name: 'Pop Corn Tub Making Machine', type: 'other' ,url:'/' },
    { id: 17, name: 'Paper Shopping Bag Making Machine', type: 'other' ,url:'/' },
    { id: 18, name: 'Paper Salad Bowl Making Machine', type: 'other' ,url:'/' },
    { id: 19, name: 'Roll Die Cutting Machine', type: 'other' ,url:'/' },
];

function App() {
    return (
        <div>
            <ProductFilter products={products} />
        </div>
    );
}

export default App;
