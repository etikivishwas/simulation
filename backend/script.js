// backend/script.js
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer (for file uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // store files in /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage });

// Route to send email
app.post("/send-email", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const resumePath = req.file ? req.file.path : null;

    // ✅ Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail", // You can use Outlook, Yahoo, etc.
      auth: {
        user: "your_email@gmail.com", // 👉 replace with your email
        pass: "your_app_password", // 👉 replace with app password (explained below)
      },
    });

    // ✅ Email content
    let mailOptions = {
      from: `"Portfolio Contact" <your_email@gmail.com>`,
      to: "your_email@gmail.com", // where you want to receive form submissions
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
      attachments: resumePath
        ? [
            {
              filename: path.basename(resumePath),
              path: resumePath,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
