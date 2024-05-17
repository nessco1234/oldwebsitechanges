import React from 'react'
import Breadcrum from '../Components/Home/Breadcrum'
import VedioComponent from '../Components/Vedio/VedioComponent'

const Video = () => {
    const vediodata = [
        {url: "https://www.youtube.com/embed/3RTj9TNsRTc"},
        {url: "https://www.youtube.com/embed/pzXScL7TpCI"},
        {url: "https://www.youtube.com/embed/QLnTvlZtVkM"},
        {url: "https://www.youtube.com/embed/D0puv4Cdnm0"},
        {url: "https://www.youtube.com/embed/rOK_o35sCpo"},
        {url: "https://www.youtube.com/embed/wRBy-XjiyiE"},
        {url: "https://www.youtube.com/embed/4zcd2OlEO-w"},
        {url: "https://www.youtube.com/embed/kzqZBWD-Z7g"},
        {url: "https://www.youtube.com/embed/wRUytLAwRLE"},
    ];
    return (
        <>
            <Breadcrum previous={"Home"} active={"Video"} />
            <section className="video">
                <div className="vediocontainer">
                    <h1 className="videoheading">Nessco <span> Videos</span></h1>
                    <div className="videobox">
                        {
                            vediodata && vediodata.map((row => (
                                <VedioComponent url={row.url} />
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
