import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, topic, message } = req.body;

    // ✅ Required field validation
    if (!firstName || firstName.trim().length < 2) {
      return res.status(400).json({ message: "First name must be at least 2 characters." });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // ✅ Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ message: "Message cannot be empty." });
    }

    if (message.length > 500) {
      return res.status(400).json({ message: "Message exceeds 500 characters." });
    }

    // ✅ Create safe object (avoid blindly trusting req.body)
    const contactData = {
      firstName: firstName.trim(),
      lastName: lastName?.trim() || "",
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      topic: topic || "",
      message: message.trim(),
    };

    // ✅ Save to DB
    const submission = await Contact.create(contactData);

    return res.status(201).json({
      message: "Message sent successfully",
      id: submission._id,
    });

  } catch (err) {
    console.error("Contact API Error:", err);

    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
});

export default router;