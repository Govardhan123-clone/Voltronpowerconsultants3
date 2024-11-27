import Link from "next/link";
import React from "react";
import "./globals.css"; // Import your global CSS or styles

export const metadata = {
  title: "Voltron Power Consultants",
  description: "Govt Licensed Class-I Electrical Contractor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Inline CSS styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
      minHeight: "100vh",
      backgroundColor: "#f9f9f9",
    },
    header: {
      display: "flex",
      flexDirection: "column" as const,
      padding: "16px",
      backgroundColor: "#DEDEDE",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    topRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    logo: {
      width: "64px",
      height: "64px",
    },
    contactInfo: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    whatsappIcon: {
      width: "32px",
      height: "32px",
      cursor: "pointer",
    },
    buttonPrimary: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      fontSize: "14px",
      border: "none",
      cursor: "pointer",
    },
    buttonOrange: {
      backgroundColor: "#ff7f0e",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      fontSize: "14px",
      border: "none",
      cursor: "pointer",
    },
    nav: {
      display: "flex",
      gap: "16px",
      marginTop: "16px",
    },
    navLink: {
      color: "#333",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
    },
    main: {
      flex: 1,
      padding: "16px",
    },
  };

  return (
    <html lang="en">
      <body>
        <div style={styles.container}>
          {/* Header Section */}
          <header style={styles.header}>
            <div style={styles.topRow}>
              {/* Logo and Title */}
              <div style={styles.logoSection}>
                <img
                  src="/image/power13.png" // Replace with your logo path
                  alt="Voltron Power Consultants"
                  style={styles.logo}
                />
                <div>
                  <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
                    VOLTRON POWER CONSULTANTS
                  </h1>
                  <p style={{ fontSize: "12px", color: "#666" }}>
                    Govt Licensed Class-I Electrical Contractor <br />
                    Testing & Commissioning Engg.
                  </p>
                </div>
              </div>

              {/* Contact Info and Buttons */}
              <div style={styles.contactInfo}>
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  096328 94606
                </span>
                <Link href="https://chat.whatsapp.com/LIFGlgfl8quLW99cI6IvwL">
                  <img
                    src="/image/whatsup.jpg"
                    alt="WhatsApp"
                    style={styles.whatsappIcon}
                  />
                </Link>
                <Link href="/services">
                  <button style={styles.buttonPrimary}>Schedule</button>
                </Link>
                <Link href="/message">
                  <button style={styles.buttonOrange}>Send Message</button>
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <nav
              style={{
                ...styles.nav,
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              <Link href="/" style={styles.navLink}>
                Home
              </Link>
              <Link href="/aboutus" style={styles.navLink}>
                About Us
              </Link>
              <Link href="/certificates" style={styles.navLink}>
                Certificates
              </Link>
              <Link href="/amenities" style={styles.navLink}>
                Amenities
              </Link>
              <Link href="/services" style={styles.navLink}>
                Services
              </Link>
              <Link href="/location" style={styles.navLink}>
                Location
              </Link>
            </nav>
          </header>

          {/* Main Content */}
          <main style={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
