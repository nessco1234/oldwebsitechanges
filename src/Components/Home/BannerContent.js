import React, { useState, useEffect } from 'react';

const BannerContent = () => {
    const [currentComponent, setCurrentComponent] = useState(0);
    const components = [<ComponentA />, <ComponentB />];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentComponent((prev) => (prev === 1 ? 0 : 1));
        }, 5000); // Change content every 5 seconds

        return () => clearInterval(interval);
    }, []);
    const [slidesToShow, setSlidesToShow] = useState(false);
    const updateSlidesToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 600) {
            setSlidesToShow(true);
        } else {
            setSlidesToShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);
    const renderComponent = () => {
        return components[currentComponent];
    };

    return (
        <div className="home-page">
            {renderComponent()}
        </div>
    );
};

const ComponentA = () =>
    <>
        {/* <h2 className="bannerslideheading"> INVITATION DRUPA <span></span></h2>
        <h2 className="bannerslideheading">2024<span></span></h2>
        <p className="bannerslidepara">Düsseldorf Exhibition Center, Düsseldorf, Germany</p> */}
        <h2 className="bannerslideheading"> Envision Success Through<span></span></h2>
        <h2 className="bannerslideheading">Innovation<span></span></h2>
        <p className="bannerslidepara">High Speed Machines That Are Enginnered For You</p>
    </>
const ComponentB = () => <>
    <h2 className="bannerslideheading">Machineries & Equipment For <br /> Sustainable Packaging<span></span></h2>
    {/* <h2 className="bannerslideheading"><span></span></h2> */}
    <p className="bannerslidepara">Dive In The World Of Paper Based Packaging Container Machines</p>
</>;
// const ComponentC = () => <>
//     <div className="bannerslideheading">Envision Success through A<span></span></div>;
//     <div className="bannerslideheading">Innovation<span></span></div>;
//     <div className="bannerslidepara">High Speed Machines that are Enginnered for you</div>;
// </>;

export default BannerContent;
