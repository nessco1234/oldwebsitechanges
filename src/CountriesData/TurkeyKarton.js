import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaper.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import { Helmet } from 'react-helmet'
import Form1 from '../Components/MarketArea/Form1'
import Form2 from '../Components/MarketArea/Form2'

const TurkeyKarton = () => {
    return (
        <><Helmet>
            <title>Karton Bardak Makinesi | Nessco</title>
            <meta name="description" content="" />
            <meta name="keywords" content="paper cup making machine, paper cup machine, paper cup machine price, paper cup making machine near me, paper cup making machine price, paper cup, paper cup machine manufacturer, paper cup machine company, cup manufacturing machine" />
            <meta name="copyright" content="Copyright 2022 Nessco India" />
            <meta name="distribution" content="global" />
            <meta name="language" content="english" />
            <meta name="robots" content="index,follow" />
            <meta name="publisher" content="Nessco India" />
            <meta name="author" content="Nessco India" />
            <link rel="canonical" href="https://www.nesscoindia.com/turkey/karton-bardak-makinesi/" />

        </Helmet>
            <section className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">karton <br /><span>bardak makinesi</span></h1>
                        <p className="intromachinedescription">
                            Nessco India is known for manufacturing and globally exporting various paper product forming machineries. With a strong functional position in this market for over 40 years, now we are backed by 5 Domestic Distributing Centers and 4 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.
                        </p>
                    </div>
                    <Form1/>
                </div>
            </section>
            <section className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                    <img src={'https://nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-machine.webp'} alt="" />

                        <h3 className="descriptionmachineleftdata">karton <span>bardak makinesi</span></h3>
                        <p className="descriptionmachineleftcontent">Nessco Kağıt Bardak Makinası son teknoloji, güvenilir, dayanıklı ve yüksek teknolojik ekipmanlar kullanılarak üretilir. Bardak koni takipçisi için bir çeşit kol düzeni ile oluşturulan yan kagıtlarının hareketi için iki katmanlı bir sisteme sahip en iyi kağıt bardak yapma makinesini üretip ihraç etmekteyiz.Robotik Kol, alt taban ısıtma, tırtıl açma (düzleştirme) ve Üstten kıvırma için daha fazla işlem için fincan külahlarının Kalıplara aktarılmasında hayati bir rol oynar. Ayrıca, bu makine, kağıt besleme ve bardak sayımı için fotoelektrik sensörler gibi bazı ek özelliklere sahiptir.
                            <br /><br />
                            Tek kullanımlık kağıt bardak makinelerimizdeki tüm işlemler, daha az Güç tüketimi sağlayan Tek Motorlu Güç Kaynağı ile gerçekleştirilir. Kap oluşturma işleminin tamamı, makinenin çeşitli (hareketli) mekanik parçaları arasındaki sürtünmeyi azaltmaya yardımcı olan yağlama düzenlemesi ile uygun yağlamayı sağlayan Open Cam teknolojisi (Bilgisayar Destekli Üretim) kullanılarak gerçekleştirilir.
                            <br /><br />
                            <b>

                                Tek Kullanımlık Kağıt Bardak Makinesi
                            </b>
                            <br /><br />
                            Yüksek hızlı kontrol için PLC (Programlanabilir Mantıksal Denetleyici) Ekranı ve daha iyi Kullanıcı Ara yüzü için HMI (İnsan Makine Ara yüzü) ve kompakt bir tasarım için Güvenlik kapıları gibi özelleştirilebilen bazı ek özellikler de seçilebilir. Nessco kağıt bardak makineleri, hem sıcak hem de soğuk içecekler için kullanılabilen Tek ve Çift taraflı PE kaplamalı Kağıt Bardak üretimine uygundur.
                            <br /><br />
                            ✔ Yüksek Hız ve Stabıl Çalışma <br />
                            ✔ Yağlama hazneli Otomatik Yağlama <br />
                            ✔ Kompakt Tasarım ve Güçlü Yapı <br />
                            ✔ Dişli Şanzıman Sistemi <br />
                            ✔ Merkezi Döner Sistem</p> <br /><br />
                    </div>
                    <div className="descriptionmachineright">
                        <div className="descriptionsuggestions">
                        {
                                specs.Suggestions.map((obj,key) => (
                                    <Link key={key} to={obj.suggestionlink} className="descriptionsuggestion">
                                        <FaAngleDoubleRight />{obj.name}
                                    </Link>

                                ))
                            }
                        </div>
                        <Form2/>
                        <div className="downloadbrochures">
                            <h3 className="downloadbrochuresheading">Download Brochures</h3>
                            <p className="downloadbrochuressubheading">Download Our Catalogue to know more about machines</p>
                            <div className="brochurecontent">
                                <div className="brochurelogo">
                                    <SiAdobeacrobatreader />
                                </div>
                                <div className="brochuredescription">
                                    <a href='/' className="brochuretitle">Nessco India Catalogue</a>
                                    <a href='/' className="brochuresubtitle">Download Now</a>
                                </div>
                            </div>
                            <div className="brochurecontent">
                                <div className="brochurelogo">
                                    <SiAdobeacrobatreader />
                                </div>
                                <div className="brochuredescription">
                                    <a href='/' className="brochuretitle">International Catalogue</a>
                                    <a href='/' className="brochuresubtitle">Download Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MachineSpecs labels={specs.MachineSpecsLabels} data={specs.MachineSpecs} />
            <RelatedProducts data={specs.RelatedProducts} />
        </>
    )
}

export default TurkeyKarton
