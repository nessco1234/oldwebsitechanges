import React from 'react'
import Breadcrum from '../Home/Breadcrum'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const PremiumPaper = () => {
    return (
        <>
            <Breadcrum third={true} previous={"Blog"} link={"/blog"} active={"Paper Cups For Hot Beverages"} />
            <section className="blogdescsection">
                <div className="blogdescsectioncontainer">

                    <h1 className="blogmainheading">Paper Cups For Hot Beverages</h1>
                    <p className="blogdesc">Disposable market is segmented by two parts – Plastic and Paper. People use disposables as per their utility. However, market is witnessing a shift towards paper disposables from the plastic ones due to rise of awareness towards an eco-friendly environment. And due to this increase in usage of paper disposables, a range of variation is available including Basic Single Layer Paper Cups, Double Wall Paper Cups, Ripple Wall Paper Cups, Bio-Coated Paper Cups, and many more. This segregation is done as per their usage that includes cold beverages and hot beverages as well. According to the type of beverage, a selection is made from different types including pocket insulated, wax paper, poly-coated, wax-coated, and others.
                        <br /><br />
                        We, at Nessco India, manufacture customize Paper Cup Machines which can manufacture cups for cold as well as hot beverages. Hot beverages like coffee or tea require special considerations when designing a cup so that while holding the cup, the drink should not burn the fingers of the person holding it. And for this purpose, we have different category of machine which manufactures Ripple Wall and Double Wall Paper Cups. This also forms a strong grip around the cup to hold it, moreover, one can add colourful and aesthetic covers to make paper cups attractive. For cold drinks, Single layer cups can also be used. In fact, popular brands like Starbucks, and many other fast food franchise have already switched to paper cups for serving their cold drinks and shakes.
                        <br /><br />

                        Besides Paper Cup Machine, we assist our customers with many more options which includes Paper Bowl Machine, Paper Straw Machine, Paper Cutlery Machine and many more. These accessories can make your cups spill-proof for extra safety or add more functionalities. These can include attached straws, stirrers, sleeves, lids, rims and more.
                        <br /><br />

                        <b>Let’s have a look at our range and get a brief of the same:</b></p>
                    <h2 className="blogheading">High Speed Paper Cup Machine</h2>
                    <p className="blogdesc">Paper cup forming machine is designed using Single Turn Plate Technology and Direct Bottom Technology which reduces wastage of paper and rotations during the process of bottom feeding, bottom knurling and top curling as well. Our machines can produce cups of different sizes as per customer’s requirement. It is suitable for manufacturing both Single and Double side PE coated Paper Cups which can be used for serving hot as well as cold drinks.</p>
                    <h2 className="blogheading">Paper Bowl Machine
                    </h2>
                    <p className="blogdesc">
                        This fully automated Paper Bowl making machine is designed with high level of accuracy and international standards. This machine is used for producing quality containers and bowls. It handles the entire process of paper feeding, bowl-fan wall sealing, oil silicon lubrication, bottom punching, heating, rolling, rimming, rounding, and cup discharge by itself. This Paper Bowl making machine can make containers up to 35 oz or 1 litre. This machine can use both single and double coated PE paper and has a production capacity of 75 pcs per minute. This model is most suitable for producing soup bowls, noodles bowls, etc.
                    </p>
                    <h2 className="blogheading">Paper Straw Machine

                    </h2>
                    <p className="blogdesc">
                        Eliminating plastic straws is easier than you think. Today, any changes and efforts made by us will bring hope to us and the future of the ocean. And we are introducing Paper Straw Machine which is suitable for producing different sizes of paper straws, such as 5 mm; 6 mm; 8 mm; 10 mm, 12 mm etc. With upgraded design for cutting device with 5 cutting knives, the speed will be higher than previous one. The stable working speed of this machine is 40-50 m/min. This machine automatically picks up the paper without any personnel operation and runs smoothly.
                        <br /><br />
                        Our only purpose of bringing this blog to you is to raise awareness for more usage of paper disposables rather than the plastic ones. We should use more and more of paper disposables for packaging and serving purpose as we all know that paper is recyclable and Paper products are an easy and widely available alternative to plastic products as well.
                    </p>
                    <div className="blognavigationbtns marr">
                        <Link to={'/blog/use-paper-cups-it-can-be-recycled/'} className='blognavbtn'><FaArrowLeftLong style={{ marginRight: "2rem" }} /> Previous</Link>
                        <Link to={'/blog/paper-cup-business-idea/'} className='blognavbtn'>Next <FaArrowRightLong style={{ marginLeft: "2rem" }} /></Link>
                    </div>
                    <div className="blognavigationbtns marrr">
                        <h3 className="blognavigationdesc">Use Paper Cups It Can Be Recycled</h3>
                        <h3 className="blognavigationdesc">How You Can Start A Business for Paper Cup</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PremiumPaper
