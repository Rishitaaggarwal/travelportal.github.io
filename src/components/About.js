import React from 'react'

function About() {
    return (
        <div>

            <p style={{ textAlign: "center", paddingTop: 20, lineHeight: 2, fontSize: 16 }}> Founded in the year 2005 as TourMyIndia.com, an online travel platform, the company boosted as a private limited in the year 2013 and has emerged as the “Best Upcoming Inbound Tour Operators in India”. It has been awarded in the category of “Excellence in the Tourism Industry” by World Tourism Brand Academy.

                The Noida based company, with a strong presence in inbound travel trade and corporate segment, today has excelled its branches over Delhi, Mumbai, Agra, Jaipur, Haridwar, Rishikesh & Badrinath. The company with its professionally managed travel engine specializes mainly in organizing Adventure, Cultural, Religious, hill station & wildlife tours in India through a sprawling network. It offers 24 X 7 hours services that include travel planning, itinerary design, hotel bookings, ticket reservations and transport facilities. It also provides holiday packages, customized as per client’s need and budget</p>
            <img style={{ 'height': "400px", width: "50%", marginLeft: "auto", marginRight: "auto", marginBottom: 50 }}
                className="d-block w-90"
                src={'assets/img/about.jpg'} />
        </div>
    )
}

export default About
