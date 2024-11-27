export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      try {
        // Simulate sending an email or saving to a database
        // Here you can integrate an email service like Nodemailer or a database operation
        console.log('Form Data:', { name, email, subject, message });
  
        return res.status(200).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Failed to send message. Please try again.' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }
  }
  