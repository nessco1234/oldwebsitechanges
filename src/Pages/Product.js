import React, { useState } from 'react';
// import './ProductFilter.css'; // Import CSS file for styling
import '../Styles/Product.css'
import ProductCard from '../Components/Product/ProductCard';
import img1 from '../Assets/images/resource/paper-glass-machine.webp'
import img2 from '../Assets/images/resource/disposable-paper-cup-making-machine.webp'
import img3 from '../Assets/images/resource/High-Speed-Paper-Cup-Making-Machine.webp'
import img4 from '../Assets/images/resource/paper-handle-cup-machine.webp'
import img5 from '../Assets/images/resource/ripple-wall-cup-machine.webp'
import img6 from '../Assets/images/resource/ServoDrivenMachine.webp'
import img7 from '../Assets/images/resource/DomeLidMachine.webp'
import img8 from '../Assets/images/resource/paper-container-bowl-machine.webp'
import img9 from '../Assets/images/resource/salad-bowl-making-machine.webp'
import img10 from '../Assets/images/resource/paper-lid-machine.webp'
import img11 from '../Assets/images/resource/paper-cutlery-machine.webp'
import img12 from '../Assets/images/resource/pop-corn-tub-making-machine.webp'
import img13 from '../Assets/images/resource/paper-plate-machine.webp'
import img14 from '../Assets/images/resource/LunchBoxMachine.webp'
import img15 from '../Assets/images/resource/CartonErectingMachine.webp'
import img16 from '../Assets/images/resource/OctagonalMachine.webp'
import img17 from '../Assets/images/resource/RectangularMachine.webp'
import img18 from '../Assets/images/resource/flexo-printing-machine-nessco.webp'
import img19 from '../Assets/images/resource/roll-die-cutting-machine.webp'
import img20 from '../Assets/images/resource/pe-coating-machine.webp'
import img21 from '../Assets/images/resource/paper-straw-making-machine.webp'
import img22 from '../Assets/images/resource/FolderGluing.webp'
import img23 from '../Assets/images/resource/SleeveForming.webp'
import img24 from '../Assets/images/resource/fully-automatic-paper-cup-making-machine.webp'
import img25 from '../Assets/images/resource/paper-cutlery-making-machine.webp'
import img26 from '../Assets/images/resource/paper-food-bag-making-machine.webp'
import img27 from '../Assets/images/resource/paper-bag-making-machine.webp'
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
                    <button className='productfilterbtn' style={selectedFilter === 'papercup' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('papercup')}>
                        Paper Cup
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperbowl' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperbowl')}>
                        Paper Bowl
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperplate' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperplate')}>
                        Paper Plate
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperlid' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperlid')}>
                        Paper Lid
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperbox' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperbox')}>
                        Paper Box
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperstraw' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperstraw')}>
                        Paper Straw
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperbag' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperbag')}>
                        Paper Bag
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'paperrelated' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('paperrelated')}>
                        Paper Related
                    </button>
                    <button className='productfilterbtn' style={selectedFilter === 'other' ? { backgroundColor: '#483d73', color: '#fff', border: "2px solid #483d73" } : {}} onClick={() => setSelectedFilter('other')}>
                        Other
                    </button>
                </div>
                <ul className='productpagelist'>
                    {filteredProducts.map(product => (
                        <>
                            <ProductCard key={product.id} heading={product.name} url={product.url} img={product.imglink} />
                        </>
                    ))}
                </ul>
            </div>
        </section>
    );
}

const products = [
    { id: 1, name: 'Disposable Cup Making Machine', type: 'papercup', url: '/product/disposable-paper-cup-making-machine/', imglink: img2 },
    { id: 2, name: 'High Speed Paper Cup Machine', type: 'papercup', url: '/product/high-speed-paper-cup-making-machine/', imglink: img3 },
    { id: 4, name: 'Paper Bag Making Machine', type: 'paperbag', url: '/product/paper-bag-making-machine/', imglink: img27 },
    { id: 5, name: 'Flexo Printing Machine', type: 'paperrelated', url: '/product/flexo-printing-machine/', imglink: img18 },
    { id: 6, name: 'Paper Cutlery Machine', type: 'other', url: '/product/paper-cutlery-machine/', imglink: img25 },
    { id: 7, name: 'Paper Container Bowl Machine', type: 'paperbowl', url: '/product/paper-container-bowl-making-machine/', imglink: img8 },
    { id: 8, name: 'Paper Food Bag Making Machine', type: 'paperbag', url: '/product/paper-food-bag-making-machine/', imglink: img26 },
    { id: 9, name: 'Paper Handle Cup Making Machine', type: 'papercup', url: '/product/paper-handle-cup-making-machine/', imglink: img4 },
    { id: 10, name: 'Paper Glass Making Machine', type: 'papercup', url: '/product/paper-glass-making-machine/', imglink: img1 },
    { id: 11, name: 'Paper Lid Making Machine', type: 'paperlid', url: '/product/paper-lid-making-machine/', imglink: img10 },
    { id: 12, name: 'Paper Plate Making Machine', type: 'paperplate', url: '/product/paper-plate-making-machine/', imglink: img13 },
    { id: 13, name: 'Paper Straw Making Machine', type: 'paperstraw', url: '/product/paper-straw-making-machine/', imglink: img21 },
    { id: 14, name: 'PE Coating Machine', type: 'paperrelated', url: '/product/pe-coating-machine/', imglink: img20 },
    { id: 15, name: 'Ripple Wall Cup Machine', type: 'papercup', url: '/product/ripple-wall-cup-machine/', imglink: img5 },
    { id: 16, name: 'Pop Corn Tub Making Machine', type: 'paperbowl', url: '/product/pop-corn-tub-making-machine/', imglink: img12 },
    { id: 17, name: 'Paper Shopping Bag Making Machine', type: 'paperbag', url: '/product/paper-shopping-bag-making-machine/', imglink: img27 },
    { id: 18, name: 'Paper Salad Bowl Making Machine', type: 'paperbowl', url: '/product/salad-bowl-making-machine/', imglink: img9 },
    { id: 19, name: 'Servo Driven Paper Cup Machine', type: 'papercup', url: '/product/servo-driven-paper-cup-machine/', imglink: img6 },
    { id: 19, name: 'Roll Die Cutting Machine', type: 'paperrelated', url: '/product/roll-die-cutting-machine/', imglink: img19 },
    { id: 19, name: 'Rectangluar Flat Bottom Bowl Machine', type: 'paperbowl', url: '/product/rectangle-flat-bottom-bowl-machine/', imglink: img17 },
    { id: 20, name: 'Paper Dome Lid Machine', type: 'paperlid', url: '/product/paper-dome-lid-machine/', imglink: img7 },
    { id: 21, name: 'Octagonal Box Forming Machine', type: 'paperbox', url: '/product/octagonal-box-forming-machine/', imglink: img16 },
    { id: 22, name: 'Lunch Box Forming Machine', type: 'paperbox', url: '/product/lunch-box-forming-machine/', imglink: img14 },
    { id: 23, name: 'Carton Erecting Machine', type: 'paperbox', url: '/product/carton-erecting-machine/', imglink: img15 },
    { id: 26, name: 'Ripple Wall Cup Sleeve Gluing Machine', type: 'other', url: '/product/ripple-wall-cup-sleeve-glueing-machine/', imglink: img22 },
    { id: 27, name: 'Paper Sleeve Gluing and Folding Machine', type: 'other', url: '/product/paper-sleeve-gluing-folding-machine/', imglink: img23 },
];

function App() {
    return (
        <>
            <Helmet>
                <title>Products Archive - Nesscoindia</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="State" content="Rajasthan" />
                <meta name="City" content="Jaipur" />
                <meta name="address" content="186 Apparel Park, Mahal Rd, Ricco Industrial Area, Jagatpura, Jaipur, Rajasthan 302022, India" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/product/" />
            </Helmet>
            <div>
                <ProductFilter products={products} />
            </div>
        </>
    );
}

export default App;
