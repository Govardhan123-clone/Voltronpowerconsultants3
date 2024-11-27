'use client';  // Add this line at the top to mark it as a Client Component
import Aboutus from "./aboutus/page";
import Amenities from "./amenities/page";
import CertificatesPage from "./certificates/page";
import Contactus from "./contact-us/page";
import Location from "./location/page";
import Message from "./message/page";
import OpeningHours from "./opening-hours/page";
import Service from "./services/page";


const Page = () => {
  return (
    <div>
    
      <header>
        <p>Find the best Electronic Services.</p>
      </header>
    
      
      <div className="home-page">
        {/* Add your iframe here */}
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="/image/vikki.jfif"
          allowFullScreen
        ></iframe>
      
      </div>

      <style jsx>{`
        .home-page {
          background-image: url('/image/vikki.jfif');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
        }
      `}</style>
      <Aboutus />
      <CertificatesPage />
      <Amenities />
      
       
       <Service />
       <Message />
       
       <OpeningHours />
       <Location />
       <Contactus />
       
    </div>
  );
};

export default Page;
