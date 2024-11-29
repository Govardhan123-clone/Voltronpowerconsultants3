"use client"
export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        <p>Contact us at: <strong>+1-800-123-4567</strong></p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: "#333",
      color: "white",
      padding: "20px",
      textAlign: "center",
      marginTop: "40px",
    },
  };
  