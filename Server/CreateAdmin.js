require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Admin Schema
const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, default: "admin" },
});

const Admin = mongoose.model("Admin", AdminSchema);

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("adminpassword123", 10); // Set your admin password here

  const admin = new Admin({
    email: "admin@example.com", // Set your admin email here
    password: hashedPassword,
  });

  await Admin.deleteMany({}); // Clears existing admins (optional)
  await admin.save();
  console.log("✅ Admin account created!");
  mongoose.connection.close();
};

createAdmin();
