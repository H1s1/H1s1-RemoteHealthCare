const express = require('express');
const crypto = require('crypto');

const app = express();


// API endpoint to generate Zoom signature
app.post('/zoom/signature', (req, res) => {
    const apiKey = U0QLmVvOS0yWpFPgfkDkA;
    const apiSecret = Aho6syKXNq6Y930uz2NPYLYBqBmTnVf3;
    const timestamp = new Date().getTime();
    const meetingNumber = req.body.meetingNumber;
    const role = req.body.role;
  
    // Generate the Zoom signature
    const signature = crypto
      .createHmac('sha256', apiSecret)
      .update(`${apiKey}${meetingNumber}${timestamp}${role}`)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  
    res.json({ signature });
  });
  

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
