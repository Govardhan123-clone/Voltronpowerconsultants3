"use client"
import ServiceList from './components/ServiceList/page';


export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <ServiceList />
      <style jsx>{`
      
        h1 {
          text-align: center;
          margin-top: 20px;
          font-size: 32px;
        }
      `}</style>
    </div>
  );
}
