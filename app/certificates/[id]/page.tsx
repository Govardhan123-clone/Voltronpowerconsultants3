"use client";

import styles from "../styles.module.css";

const certificates = [
  {
    id: 1,
    title: "ISO Certification",
    image: "/images/iso-certification.jpg",
    description: "ISO 9001:2015 Certification for Quality Management.",
    details: "This certificate was awarded for maintaining excellent quality standards across all processes.",
  },
  {
    id: 2,
    title: "Safety Standards Certification",
    image: "/images/safety-certification.jpg",
    description: "Certification for meeting global safety standards.",
    details: "This certificate recognizes our commitment to workplace and product safety.",
  },
  {
    id: 3,
    title: "Environmental Compliance",
    image: "/images/environment-certification.jpg",
    description: "Certification for environmental sustainability efforts.",
    details: "Awarded for adhering to environmental regulations and promoting sustainability.",
  },
];

export default function CertificateDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const certificate = certificates.find((item) => item.id === parseInt(id));

  if (!certificate) {
    return <p>Certificate not found!</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1>{certificate.title}</h1>
      <img
        src={certificate.image}
        alt={certificate.title}
        className={styles.certificateImageLarge}
      />
      <p>{certificate.details}</p>
    </div>
  );
}
