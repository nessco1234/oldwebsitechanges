import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Breadcrum from '../Home/Breadcrum'
const ConsumerChoice = () => {
    return (
        <>
            <Breadcrum third={true} previous={"Blog"} link={"/blog"} active={"Why Paper Cups – Responsible Consumer Choice?"} />
            <section className="blogdescsection">
                <div className="blogdescsectioncontainer">

                    <h1 className="blogmainheading">Why Paper Cups – Responsible Consumer Choice?</h1>
                    <p className="blogdesc">For a century, plastic has been among the consumer first choice in Beverage and food Industries especially in QSR (Quick Service Restaurant). You know it is very convenient to use as well as easy to replace plastic to paper cups. But despite all the comfort and convenience, there are very disturbing elements that add to our lives and to this beautiful earth. Excessive global plastic consumption has brought the material’s negative impacts into question. Some health specialists are now emphasizing to minimize exposures to the potentially harmful components of Plastics.
                        <br /><br />
                        Plastic Pollution is one of the serious threats to our environment, Creating toxic exposure in every phase of its life cycle. Using Plastic disposal is like an environmental crime. But thanks to Paper Cups negative impacts and perceptions are fading away. Studies reveal that the risks of Plastic disposals prone to straying into the environment. Luckily paper cups may be less risky for the environment.
                        <br /><br />

                        According to the Environmental Protect Agency, “one-third to two-thirds of the debris we catalogue on beaches comes from single-use, disposable plastic packaging…” In short, paper is not the cause of the litter and marine debris problem communities are trying to solve.
                        <br /><br />

                        The facts support a convincing case that the producers of paper cups – the paper products making industry – have a long obligation to feasible strategic approaches that secure the climate, prod development and advance reusing.</p>
                    <h1 className="blogheading">Advantages Of Using Paper Cups</h1>
                    <p className="blogdesc"> <b>1. Eco-friendly:</b> With alarming global warming conditions and other environmental deterioration, today the most common factor to keep in mind is that the product widely used must be eco-friendly. As these cups are made of disposable material, it decomposes quite easily. Not only this but also the cups can easily be recycled if it is in the right hands. The cups are made up of pulp extracted from the trees and water. Thus, there is arises no question of it being toxic.
                        <br /><br />
                        <b>2. Convenient:</b> The takeaway cups are convenient to use and carry. Being light in weight, you can cart them around as per your wish. Takeaway coffee cups are the best alternative. It is the best option if you are planning an outing. They are easily portable and the package also is convenient enough to carry.
                        <br /><br />
                        <b>3. Safe:</b> If you compare the disposable cups to the plastic and Styrofoam cups, these cups are safe to use either for hot beverages or for cold beverages. Easy to handle and does not contain toxic materials
                        <br /><br />
                        <b>4. Variety:</b> The paper cup machinery is available for a wide variety of cup shapes and sizes. It also provides different prints e.g. Cartoon designs, logos printed, designs of coffee, tea, or any other beverage, and lots more.</p>
                    <h1 className="blogheading">Use Paper Cup Guilt free</h1>
                    <p className="blogdesc">
                        The first thing that sets paper cups apart from other cups: They are made from sustainably managed, renewable materials whose cultivation benefits the environment. Paper products, like cups and paper-based packaging, are made with wood fiber from sustainably-managed forests, which is a 100 percent renewable resource.
                        <br /><br />
                        Paper cups offer consumers a convenient, clean and hygienic product made with sustainable manufacturing practices from a renewable resource which can be recycled. Technological innovations in paper cup making machine are continuously allowing the industry to access and recycle more paper-based products and turn them into new products. Used paper cups are accepted by mills that have the capability to repulp them. The fiber from recycled cups and containers is then used to make tissue, de-inked market pulp (that goes into a number of paper products) and recycled paperboard.
                        <br /><br />

                        Paper products, including paper cups, do a lot more than hold food and beverages or package other materials. It is our home and it’s our responsibility to Clean up the plastic mess. So finally you all must Say Yes To Paper Cups? Start Using It.
                    </p>
                    <div className="blognavigationbtns marr">
                        <Link to={'/blog/disposable-packaging-solutions-for-horeca/'} className='blognavbtn'><FaArrowLeftLong style={{ marginRight: "2rem" }} /> Previous</Link>
                        <Link to={'/blog/paper-plate-making-machine-an-eco-friendly-alternative'} className='blognavbtn'>Next <FaArrowRightLong style={{ marginLeft: "2rem" }} /></Link>
                    </div>
                    <div className="blognavigationbtns marrr">
                        <h1 className="blognavigationdesc">Disposable Packaging Solutions for HORECA</h1>
                        <h1 className="blognavigationdesc">Paper Plate Making Machine Eco Friendly Alternative</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConsumerChoice
