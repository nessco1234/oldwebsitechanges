import React, { useState } from 'react';
// import './ProductFilter.css'; // Import CSS file for styling
import '../Styles/Gallery.css'
import { Helmet } from 'react-helmet';

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
                <div className='productpagelist'>
                    <div className="aboutexpertspic">
                        {filteredProducts.map((product,key) => (
                            <>
                                <div key={key} className="imgcontainer">
                                    <img src={product.url} alt={product.alt} />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const products = [
    { id: 1, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition1.webp' ,alt:"Exhibition1" },
    { id: 2, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition2.webp' ,alt:"Exhibition2" },
    { id: 3, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition3.webp' ,alt:"Exhibition3" },
    { id: 4, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition4.webp' ,alt:"Exhibition4" },
    { id: 5, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition5.webp' ,alt:"Exhibition5" },
    { id: 6, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition6.webp' ,alt:"Exhibition6" },
    { id: 7, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition7.webp' ,alt:"Exhibition7" },
    { id: 8, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/Exhibition8.webp' ,alt:"Exhibition8" },
    { id: 9, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/exhibition9.webp' ,alt:"exhibition9" },
    { id: 10, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/exhibition10.webp' ,alt:"exhibition10" },
    { id: 11, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/exhibition11.webp' ,alt:"exhibition11" },
    { id: 12, type: 'Exhibition', url: 'https://www.nesscoindia.com/Assets/images/gallery/exhibition12.webp' ,alt:"exhibition12" },
    { id: 13, type: 'Clients', url: 'https://www.nesscoindia.com/Assets/images/gallery/client1.webp' ,alt:"client1" },
    { id: 14, type: 'Clients', url: 'https://www.nesscoindia.com/Assets/images/gallery/client2.webp' ,alt:"client2" },
    { id: 15, type: 'Clients', url: 'https://www.nesscoindia.com/Assets/images/gallery/client3.webp' ,alt:"client3" },
    { id: 16, type: 'Clients', url: 'https://www.nesscoindia.com/Assets/images/gallery/client4.webp' ,alt:"client4" },
    { id: 17, type: 'Clients', url: 'https://www.nesscoindia.com/Assets/images/gallery/client5.webp' ,alt:"client5" },
    { id: 18, type: 'Clients', url: 'https://www.nesscoindia.com/Assets/images/gallery/client6.webp' ,alt:"client6" },
    { id: 19, type: 'Clients', url: 'https://www.nesscoindia.com/Assets/images/gallery/client7.webp' ,alt:"client7" },
    { id: 20, type: 'Events', url: 'https://www.nesscoindia.com/Assets/images/gallery/event1.webp' ,alt:"event1" },
    { id: 21, type: 'Events', url: 'https://www.nesscoindia.com/Assets/images/gallery/event2.webp' ,alt:"event2" },
    { id: 22, type: 'Events', url: 'https://www.nesscoindia.com/Assets/images/gallery/event3.webp' ,alt:"event3" },
    { id: 23, type: 'Events', url: 'https://www.nesscoindia.com/Assets/images/gallery/event4.webp' ,alt:"event4" },
    { id: 24, type: 'Events', url: 'https://www.nesscoindia.com/Assets/images/gallery/event5.webp' ,alt:"event5" },
    { id: 25, type: 'Events', url: 'https://www.nesscoindia.com/Assets/images/gallery/event6.webp' ,alt:"event6" },
    { id: 26, type: 'Installation', url: 'https://www.nesscoindia.com/Assets/images/gallery/installation1.webp' ,alt:"installation1" },
    { id: 27, type: 'Installation', url: 'https://www.nesscoindia.com/Assets/images/gallery/installation2.webp' ,alt:"installation2" },
    { id: 28, type: 'Installation', url: 'https://www.nesscoindia.com/Assets/images/gallery/installation3.webp' ,alt:"installation3" },
    { id: 29, type: 'Installation', url: 'https://www.nesscoindia.com/Assets/images/gallery/installation4.webp' ,alt:"installation4" },
    { id: 30, type: 'Installation', url: 'https://www.nesscoindia.com/Assets/images/gallery/installation5.webp' ,alt:"installation5" },
    { id: 31, type: 'Installation', url: 'https://www.nesscoindia.com/Assets/images/gallery/installation6.webp' ,alt:"installation6" },
];

function Gallery() {
    return (
        <>
<Helmet>
    <title>Nessco Gallary</title>
</Helmet>
            <div>
                <h1 className="galleryheading">Our <span>Gallery</span></h1>
                <ProductFilter products={products} />

            </div>
        </>
    );
}

export default Gallery;
