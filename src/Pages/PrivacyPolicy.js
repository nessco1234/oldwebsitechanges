import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Breadcrum from '../Components/Home/Breadcrum'
import { Helmet } from 'react-helmet'
const PrivacyPolicy = () => {
    return (
        <>
        <Helmet>
            <title>Privacy Policy - Nessco India</title>
        </Helmet>
            <Breadcrum previous={"Home"} link={"/"} active={"Privacy Policy"} />
            <section className="blogdescsection">
                <div className="blogdescsectioncontainer">

                    <h1 className="blogmainheading">Who we are</h1>
                    <p className="blogdesc">Our website address is:<Link to={'/'}> https://www.nesscoindia.com.</Link></p>
                    <h1 className="blogheading">What personal data we collect and why we collect it</h1>
                    <h1 className="blogheading">Comments</h1>
                    <p className="blogdesc"> When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                    <h1 className="blogheading">Media</h1>
                    <p className="blogdesc">
                        If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                    </p>
                    <h1 className="blogheading">Cookies</h1>
                    <p className="blogdesc">
                        If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                        <br /><br />
                        If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

                        <br /><br />
                        When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                        <br /><br />

                        If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                    </p>
                    <h1 className="blogheading">Media</h1>
                    <p className="blogdesc">
                        If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                    </p>
                    <h1 className="blogheading">How long we retain your data</h1>
                    <p className="blogdesc">
                        If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                        <br /><br />
                        For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                    </p>
                    <h1 className="blogheading">What rights you have over your data</h1>
                    <p className="blogdesc">
                        If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    </p>
                    <h1 className="blogheading">Where we send your data</h1>
                    <p className="blogdesc">
                        If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    </p>
                    <h1 className="blogheading">Where we send your data</h1>
                    <p className="blogdesc">
                    Visitor comments may be checked through an automated spam detection service.
                    </p>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy
