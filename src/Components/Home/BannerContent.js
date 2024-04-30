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

    const renderComponent = () => {
        return components[currentComponent];
    };

    return (
        <div className="home-page">
            <div className="control-buttons">
                {/* <button onClick={() => setCurrentComponent((prev) => (prev === 0 ? 2 : prev - 1))}>Previous</button> */}
                {/* <button onClick={() => setCurrentComponent((prev) => (prev === 2 ? 0 : prev + 1))}>Next</button> */}
            </div>
            {renderComponent()}
        </div>
    );
};

const ComponentA = () =>
    <>
        <div className="bannerslideheading">Envision Success Through <span></span></div>;
        <div className="bannerslideheading">Innovation<span></span></div>;
        <div className="bannerslidepara">High Speed Machines That Are Enginnered For You</div>;
    </>
const ComponentB = () => <>
    <div className="bannerslideheading">Machineries & Equipment For<span></span></div>;
    <div className="bannerslideheading">Sustainable Packaging<span></span></div>;
    <div className="bannerslidepara">Dive In The World Of Paper Based Packaging Container Machines</div>;
</>;
// const ComponentC = () => <>
//     <div className="bannerslideheading">Envision Success through A<span></span></div>;
//     <div className="bannerslideheading">Innovation<span></span></div>;
//     <div className="bannerslidepara">High Speed Machines that are Enginnered for you</div>;
// </>;

export default BannerContent;
