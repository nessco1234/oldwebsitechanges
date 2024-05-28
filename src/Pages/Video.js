import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import VedioComponent from '../Components/Vedio/VedioComponent'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';

const Video = () => {
    const vediodata = [
        { url: "https://www.youtube.com/embed/3RTj9TNsRTc" },
        { url: "https://www.youtube.com/embed/pzXScL7TpCI" },
        { url: "https://www.youtube.com/embed/QLnTvlZtVkM" },
        { url: "https://www.youtube.com/embed/D0puv4Cdnm0" },
        { url: "https://www.youtube.com/embed/rOK_o35sCpo" },
        { url: "https://www.youtube.com/embed/wRBy-XjiyiE" },
        { url: "https://www.youtube.com/embed/4zcd2OlEO-w" },
        { url: "https://www.youtube.com/embed/kzqZBWD-Z7g" },
        { url: "https://www.youtube.com/embed/wRUytLAwRLE" },
    ];
    return (
        <>
            <Helmet>
                <title>Disposable Paper Machinery Videos | Nessco India</title>
                <meta name="description" content="Watch videos showcasing the latest disposable paper machinery at Nessco India. Explore innovative solutions for your paper cup, straw, bowl, Lid, plate, bag manufacturing needs." />
                <meta name="keywords" content="paper cup making machine, paper cup machine, paper cup machine price, paper cup making machine near me, paper cup making machine price, paper cup, paper cup machine manufacturer, paper cup machine company, cup manufacturing machine" />
                <meta name="State" content="Rajasthan" />
                <meta name="City" content="Jaipur" />
                <meta name="address" content="186 Apparel Park, Mahal Rd, Ricco Industrial Area, Jagatpura, Jaipur, Rajasthan 302022, India" />
                <meta name="copyright" content="Copyright 2022 Nessco India" />
                <meta name="distribution" content="global" />
                <meta name="language" content="english" />
                <meta name="robots" content="index,follow" />
                <meta name="publisher" content="Nessco India" />
                <meta name="author" content="Nessco India" />
                <link rel="canonical" href="https://www.nesscoindia.com/video/" />

            </Helmet>
            <section className="breadcrum">
                <div className="breadcrumcontainer">
                    <Link to={'/'} className='breadcrumheading'>Home<FaAngleRight className='breadcrumicon' /></Link><h3 className='breadcrumheading'><span>Video</span> </h3>
                </div>
            </section>
            <section className="video">
                <div className="vediocontainer">
                    <h1 className="videoheading">Nessco <span> Videos</span></h1>
                    <div className="videobox">
                        {
                            vediodata && vediodata.map(((row,key) => (
                                <VedioComponent key={key} url={row.url} />
                            )
                            ))
                        }
                        <VedioComponent url={""} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
