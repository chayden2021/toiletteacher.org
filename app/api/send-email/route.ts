import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

let isSending = false; // Add a flag to prevent duplicate sends

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (isSending) {
    console.log("Duplicate request detected. Email is already being sent.");
    return NextResponse.json({ success: false, message: "Duplicate request" }, { status: 429 });
  }

  isSending = true; // Set the flag to prevent further submissions
  console.log("Processing request:", { name, email, message }); // Debugging log

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com", // Yahoo's SMTP server
    port: 465, // Secure port for Yahoo
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER, // Your Yahoo email address
      pass: process.env.EMAIL_PASS, // Your Yahoo app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Your Yahoo email address
    to: process.env.RECIPIENT_EMAIL, // Your email address to receive the request
    subject: "New Toilet Teacher Request",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    console.log("Sending email with options:", mailOptions); // Debugging log
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!"); // Debugging log
    isSending = false; // Reset the flag after sending
    return NextResponse.json({ success: true });
  } catch (error) {
    isSending = false; // Reset the flag on error
    console.error("Error sending email:", error); // Debugging log
    return NextResponse.json({ success: false }, { status: 500 });
  }
}