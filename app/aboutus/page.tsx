"use client"
import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>About Us</h1>
        <h2 style={styles.subtitle}>Electrical Testing & Commissioning Engineers</h2>
        <p style={styles.text}>
          We are a Govt. approved Class I Electrical Contractors and it is a One Stop Solution for all Your Calibration
          and Testing needs established in the year 2017 and committed to providing the highest possible accuracies,
          fastest time, and at a competitive price.
        </p>
        <p style={styles.text}>
          VPC provides services in Pre-commissioning & Annual testing of all power-generating stations like Hydro,
          Thermal, Wind, Power stations, and Sub-stations from 11kV to 220kV.
        </p>
        <p style={styles.text}>
          Testing & Calibrations of any HT/LT protection Relays, recording and measuring meters (kWh, MFM, MDM, Volt &
          AMPS Meter), CTs, PTs, Circuit Breakers, Transformers, Cables & Bus Bars, Isolators, Lighting Arrestors,
          Capacitors & Earth Pits.
        </p>
        <p style={styles.text}>
          Transformer Oil Filtration, Transformer Repairs, Cable Laying & Termination, Electrical Panel Thermography
          Audit, Panel Board Erection, and allied services. We undertake Turnkey project and interior Wiring for all
          types of Buildings, AMC services, Periodical Inspections, and Approval of new electrical connections and
          Installations from CEIG/BESCOM.
        </p>
        <p style={styles.text}>
          We have a team of expert professionals who carry out the demanded services as per the specification asked of
          our clients. Our innovative techniques for rendering services have assisted us in properly managing time &
          resources. We have a set of fair business policies to safeguard the interest of our clients.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/image/7f8856c9-b356-4557-bc5e-d3a7ffedd9d0.jfif"
          alt="Electrical Equipment"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
  },
  content: {
    flex: 1,
    paddingRight: "20px",
  },
  title: {
    fontSize: "36px",
    color: "#1a1a1a",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "24px",
    color: "#1a1a1a",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
  },
  imageContainer: {
    flex: 0.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default AboutUs;

