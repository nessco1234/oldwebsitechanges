import React from 'react';
import { Helmet } from 'react-helmet';

const AnalyticsHelmet = () => (
    <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16529601205"></script>
        <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16529601205');
            gtag('event', 'conversion', {
                'send_to': 'AW-16529601205/3QysCJCIpMQZELXl9sk9',
                'value': 1.0,
                'currency': 'INR'
            });
            `}
        </script>
    </Helmet>
);

export default AnalyticsHelmet;
