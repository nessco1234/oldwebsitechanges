import React, { useState } from 'react';
// import './ProductFilter.css'; // Import CSS file for styling
import '../Styles/Gallery.css'
import img1 from '../Assets/images/gallery/Exhibition1.webp'
import img2 from '../Assets/images/gallery/Exhibition2.webp'
import img3 from '../Assets/images/gallery/Exhibition3.webp'
import img4 from '../Assets/images/gallery/Exhibition4.webp'
import img5 from '../Assets/images/gallery/Exhibition5.webp'
import img6 from '../Assets/images/gallery/Exhibition6.webp'
import img7 from '../Assets/images/gallery/Exhibition7.webp'
import img8 from '../Assets/images/gallery/Exhibition8.webp'
import img9 from '../Assets/images/gallery/exhibition9.webp'
import img10 from '../Assets/images/gallery/exhibition10.webp'
import img11 from '../Assets/images/gallery/exhibition11.webp'
import img12 from '../Assets/images/gallery/exhibition12.webp'
import img13 from '../Assets/images/gallery/client1.webp'
import img14 from '../Assets/images/gallery/client2.webp'
import img15 from '../Assets/images/gallery/client3.webp'
import img16 from '../Assets/images/gallery/client4.webp'
import img17 from '../Assets/images/gallery/client5.webp'
import img18 from '../Assets/images/gallery/client6.webp'
import img19 from '../Assets/images/gallery/client7.webp'
import img20 from '../Assets/images/gallery/event1.webp'
import img21 from '../Assets/images/gallery/event2.webp'
import img22 from '../Assets/images/gallery/event3.webp'
import img23 from '../Assets/images/gallery/event4.webp'
import img24 from '../Assets/images/gallery/event5.webp'
import img25 from '../Assets/images/gallery/event6.webp'
import img26 from '../Assets/images/gallery/installation1.webp'
import img27 from '../Assets/images/gallery/installation2.webp'
import img28 from '../Assets/images/gallery/installation3.webp'
import img29 from '../Assets/images/gallery/installation4.webp'
import img30 from '../Assets/images/gallery/installation5.webp'
import img31 from '../Assets/images/gallery/installation6.webp'

function ProductFilter({ products }) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    // Function to filter products based on the selected filter
    const filteredProducts = selectedFilter !== 'All'
        ? products.filter(product => product.type === selectedFilter)
        : products;

    return (
        <section className='productpage'>
            <div className="productpagecontainer">
                <div className="productpagebtncontainer">
                    <button className='productfilterbtn' style={selectedFilter === 'All' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('All')}>
                        All
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'Installation' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('Installation')}>
                        Installation
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'Clients' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('Clients')}>
                        Clients
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'Events' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('Events')}>
                        Events
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'Exhibition' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('Exhibition')}>
                        Exhibition
                    </button>

                </div>
                <ul className='productpagelist'>
                    <div className="aboutexpertspic">
                        {filteredProducts.map(product => (
                            <>
                                <div className="imgcontainer">
                                    <img src={product.url} alt="" />
                                </div>
                            </>
                        ))}
                    </div>
                </ul>
            </div>
        </section>
    );
}

const products = [
    { id: 1, type: 'Exhibition', url: img1 },
    { id: 2, type: 'Exhibition', url: img2 },
    { id: 3, type: 'Exhibition', url: img3 },
    { id: 4, type: 'Exhibition', url: img4 },
    { id: 5, type: 'Exhibition', url: img5 },
    { id: 6, type: 'Exhibition', url: img6 },
    { id: 7, type: 'Exhibition', url: img7 },
    { id: 8, type: 'Exhibition', url: img8 },
    { id: 9, type: 'Exhibition', url: img9 },
    { id: 10, type: 'Exhibition', url: img10 },
    { id: 11, type: 'Exhibition', url: img11 },
    { id: 12, type: 'Exhibition', url: img12 },
    { id: 13, type: 'Clients', url: img13 },
    { id: 14, type: 'Clients', url: img14 },
    { id: 15, type: 'Clients', url: img15 },
    { id: 16, type: 'Clients', url: img16 },
    { id: 17, type: 'Clients', url: img17 },
    { id: 18, type: 'Clients', url: img18 },
    { id: 19, type: 'Clients', url: img19 },
    { id: 20, type: 'Events', url: img20 },
    { id: 21, type: 'Events', url: img21 },
    { id: 22, type: 'Events', url: img22 },
    { id: 23, type: 'Events', url: img23 },
    { id: 24, type: 'Events', url: img24 },
    { id: 25, type: 'Events', url: img25 },
    { id: 26, type: 'Installation', url: img26 },
    { id: 27, type: 'Installation', url: img27 },
    { id: 28, type: 'Installation', url: img28 },
    { id: 29, type: 'Installation', url: img29 },
    { id: 30, type: 'Installation', url: img30 },
    { id: 31, type: 'Installation', url: img31 },
];

function Gallery() {
    return (
        <div>
            <h1 className="galleryheading">Our <span>Gallery</span></h1>
            <ProductFilter products={products} />

        </div>
    );
}

export default Gallery;
