import React from 'react'
import client1 from '../../Assets/images/clients/Autonics.webp'
import client2 from '../../Assets/images/clients/Delta.webp'
import client3 from '../../Assets/images/clients/Eura.webp'
import client4 from '../../Assets/images/clients/Omron.webp'
import client5 from '../../Assets/images/clients/Panasonic.webp'
import client6 from '../../Assets/images/clients/SMC.webp'
import client7 from '../../Assets/images/clients/Schneider.webp'
import client8 from '../../Assets/images/clients/Siemens.webp'
const InfinteCompany = () => {
    return (
        <>
            <hr />
            <div class="logos">
                <div class="logos-slide">
                    <img src={client1} />
                    <img src={client2} />
                    <img src={client3} />
                    <img src={client4} />
                    <img src={client5} />
                    <img src={client6} />
                    <img src={client7} />
                    <img src={client8} />
                </div>
                <div class="logos-slide">
                    <img src={client1} />
                    <img src={client2} />
                    <img src={client3} />
                    <img src={client4} />
                    <img src={client5} />
                    <img src={client6} />
                    <img src={client7} />
                    <img src={client8} />
                </div>
            </div>
            {/* <hr /> */}
        </>
    )
}

export default InfinteCompany
