import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { Link } from 'react-router-dom'
import MachineSpecs from '../Components/MachineComponent/MachineSpecs'
import specs from '../Data/UAEPaper.json'
import RelatedProducts from '../Components/MachineComponent/RelatedProducts'
import img1 from '../Assets/images/resource/fully-automatic-paper-cup-machine.webp'

const TurkeyKarton = () => {
    return (
        <>
            <div className="intromachine">
                <div className="intromachinecompo">
                    <div className="intromachineleft">
                        <h1 className="intromachineheading">karton <br /><span>bardak makinesi</span></h1>
                        <p className="intromachinedescription">
                            Nessco India is known for manufacturing and globally exporting various paper product forming machineries. With a strong functional position in this market for over 40 years, now we are backed by 5 Domestic Distributing Centers and 4 International Ones. Over all these years, we have spread our arms to almost every country to expand our business globally.
                        </p>
                    </div>
                    <div className="intromachineform">
                        <div className="intromachinecard">
                            <input placeholder='Full Name *' className='intromachineforminputs' type="text" />
                            <input placeholder='Phone Number *' className='intromachineforminputs' type="text" />
                            <input placeholder='Email ' className='intromachineforminputs' type="text" />
                            <textarea placeholder='Message ' className='intromachineforminputs' type="text" />
                            <button className='intromachineformbtn'>Send Message <FaArrowRightLong className='intromachineicon' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="descriptionmachine">
                <div className="descriptionmachinecomp">
                    <div className="descriptionmachineleft">
                        <img src={img1} alt="" />
                        <h1 className="descriptionmachineleftdata">karton <span>bardak makinesi</span></h1>
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
                                specs.Suggestions.map(obj => (
                                    <Link to={obj.suggestionlink} className="descriptionsuggestion">
                                        <FaAngleDoubleRight />{obj.name}
                                    </Link>

                                ))
                            }
                        </div>
                        <div className="descriptionaboutaquote">
                            <h1 className="descriptionaboutaquoteheading">Get a Quote</h1>
                            <input placeholder='Full Name *' className='descriptionaboutaquoteinputs' type="text" />
                            <input placeholder='Phone Number*' className='descriptionaboutaquoteinputs' type="text" />
                            <input placeholder='Email' className='descriptionaboutaquoteinputs' type="text" />
                            <textarea placeholder='Message' className='descriptionaboutaquoteinputs' ></textarea>
                            <button className="descriptionaboutbtn">
                                Send Message <FaArrowRightLong />
                            </button>
                        </div>
                        <div className="downloadbrochures">
                            <h1 className="downloadbrochuresheading">Download Brochures</h1>
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
            </div>
            <MachineSpecs labels={specs.MachineSpecsLabels} data={specs.MachineSpecs} />
            <RelatedProducts data={specs.RelatedProducts} />
        </>
    )
}

export default TurkeyKarton
