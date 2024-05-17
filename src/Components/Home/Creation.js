import React, { useState } from 'react'
import { CgPlayButton } from 'react-icons/cg'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdArrowRightAlt } from 'react-icons/md'
import '../../Styles/Modal.css';  // Ensure to create this CSS file

const Creation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            <section className="creation">
                <div className="creationpattern1"></div>
                <div className="creationpattern2"></div>
                <div className="creationpattern3"></div>
                <div className="creationpattern4"></div>
                {isOpen && (
                    <div className="modal">
                        <button className="close-button" onClick={closeModal}>&times;</button>
                        <iframe className="modal-content" width={1000} height={500} id="fancybox-frame1715329533515" name="fancybox-frame1715329533515" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allowtransparency="true" src="//www.youtube.com/embed/e-rwkwTE8P4?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>
                    </div>
                )}
                <div className="creationcontainer">
                    <div className="creationcontent">
                        <h1 className="creationheading">High Tech Machines<br /> Created By <br /> Our Engineers:</h1>
                        <p className="creationdesc">
                            Our Engineers innovate and bring new solutions every now and then to  ease the production process. We change the way you think about Paper Packaging Industry.
                        </p>
                        <button onClick={openModal} className="creationbtns">
                            <p className='creationbtncon'>Play Video</p> <FaArrowRightLong className='creationbtnarrow' style={{ fontSize: "1.5rem" }} /></button>
                    </div>
                    <div className="creationbtn">
                        <button className="youtubebtn" onClick={openModal}><CgPlayButton /></button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Creation
