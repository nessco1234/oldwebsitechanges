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
                    <button className='productfilterbtn' style={selectedFilter === 'All' ? { backgroundColor: '#483d73', color: '#fff',border:"2px solid #483d73" } : {}} onClick={() => setSelectedFilter('All')}>
                        All
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'papercup' ? { backgroundColor: '#483d73', color: '#fff',border:"2px solid #483d73" } : {}} onClick={() => setSelectedFilter('papercup')}>
                        Paper Cup
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperbag' ? { backgroundColor: '#483d73', color: '#fff',border:"2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperbag')}>
                        Paper Bag
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperbowl' ? { backgroundColor: '#483d73', color: '#fff',border:"2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperbowl')}>
                        Paper Bowl
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperstraw' ? { backgroundColor: '#483d73', color: '#fff',border:"2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperstraw')}>
                        Paper Straw
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperrelated' ? { backgroundColor: '#483d73', color: '#fff',border:"2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperrelated')}>
                        Paper Related
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'other' ? { backgroundColor: '#483d73', color: '#fff',border:"2px solid #483d73" } : {}} onClick={() => setSelectedFilter('other')}>
                        Other
                    </button>
                </div>
                <ul className='productpagelist'>
                    {filteredProducts.map(product => (
                        <>
                            <ProductCard key={product.id} heading={product.name} url={product.url} img={img1} />
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const products = [
    { id: 1, name: 'Disposable Cup Making Machine', type: 'papercup',url:'/product/disposable-paper-cup-making-machine/' },
    { id: 2, name: 'High Speed Paper Cup Machine', type: 'papercup',url:'/product/high-speed-paper-cup-making-machine/' },
    { id: 3, name: 'Fully Automatic Cup Making Machine', type: 'papercup',url:'' },
    { id: 4, name: 'Paper Bag Making Machine', type: 'paperbag',url:'/product/paper-bag-making-machine/' },
    { id: 5, name: 'Flexo Printing Machine', type: 'paperrelated',url:'/product/flexo-printing-machine/' },
    { id: 6, name: 'Paper Cultery Machine', type: 'paperbowl',url:'/product/paper-cutlery-machine/' },
    { id: 7, name: 'Paper Container Bowl Machine', type: 'paperbowl' ,url:'/product/paper-container-bowl-making-machine/' },
    { id: 8, name: 'Paper Food Bag Making Machine', type: 'paperbag' ,url:'/product/paper-food-bag-making-machine/' },
    { id: 9, name: 'Paper Handle Cup Making Machine', type: 'papercup' ,url:'/product/paper-handle-cup-making-machine/' },
    { id: 10, name: 'Paper Glass Making Machine', type: 'papercup' ,url:'/product/paper-glass-making-machine/' },
    { id: 11, name: 'Paper Lid Making Machine', type: 'paperbowl' ,url:'/product/paper-lid-making-machine/' },
    { id: 12, name: 'Paper Plate Making Machine', type: 'other' ,url:'/product/paper-plate-making-machine/' },
    { id: 13, name: 'Paper Straw Making Machine', type: 'paperstraw' ,url:'/product/paper-straw-making-machine/' },
    { id: 14, name: 'PE Coating Machine', type: 'paperrelated' ,url:'/product/pe-coating-machine/' },
    { id: 15, name: 'Ripple Wall Cup Machine', type: 'papercup' ,url:'/product/ripple-wall-cup-machine/' },
    { id: 16, name: 'Pop Corn Tub Making Machine', type: 'paperbowl' ,url:'/product/pop-corn-tub-making-machine/' },
    { id: 17, name: 'Paper Shopping Bag Making Machine', type: 'paperbag' ,url:'/product/paper-shopping-bag-making-machine/' },
    { id: 18, name: 'Paper Salad Bowl Making Machine', type: 'paperbowl' ,url:'/product/salad-bowl-making-machine/' },
    { id: 19, name: 'Roll Die Cutting Machine', type: 'paperrelated' ,url:'/product/roll-die-cutting-machine/' },
];

function App() {
    return (
        <div>
            <ProductFilter products={products} />
        </div>
    );
}

export default App;
