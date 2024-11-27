"use client";

import Link from "next/link";
import styles from "./styles.module.css";

const certificates = [
  {
    id: 1,
    title: "Certificates",
    image: "/image/power13.png",
    description: "CEIG CERTIFICATE",
  },
  
];

export default function CertificatesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Certificates</h1>  {/* Use the new class */}
      <div className={styles.certificatesGrid}>
        {certificates.map((certificate) => (
          <div key={certificate.id} className={styles.certificateCard}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className={styles.certificateImage}
            />
            <h2>{certificate.title}</h2>
            <p>{certificate.description}</p>
            <Link href={`/certificates/${certificate.id}`} className={styles.viewDetails}>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
