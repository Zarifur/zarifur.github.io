import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const showTempMessage = (
    type: "success" | "error",
    message: string,
    duration = 5000, // 5 seconds
  ) => {
    if (type === "success") {
      setSuccess(message);
      setError("");
    } else {
      setError(message);
      setSuccess("");
    }

    setTimeout(() => {
      setSuccess("");
      setError("");
    }, duration);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const payload = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_email: "zarifsanad@gmail.com",
    };

    try {
      // Auto-reply to USER
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_USER!,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
      );

      // Notification to YOU
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN!,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
      );

      showTempMessage(
        "success",
        "Message sent successfully! I’ll contact you soon.",
        5000,
      );

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      showTempMessage(
        "error",
        "Failed to send message. Please try again.",
        5000,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-page text-primary flex flex-col md:flex-row p-8 gap-8">
      {/* LEFT PANEL */}
      <div className="flex flex-col gap-6 md:w-1/3">
        <h1 className="text-4xl font-bold">Contact</h1>

        {[
          { icon: LocationOnIcon, text: "Dhaka" },
          { icon: PhoneIcon, text: "+880 1975 393 838" },
          { icon: EmailIcon, text: "zarifsanad@gmail.com" },
          { icon: CheckCircleIcon, text: "Freelance Available" },
        ].map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="bg-surface border border-border p-6 rounded-xl flex items-center gap-4 hover:bg-accentSoft transition"
          >
            <Icon className="text-accent" fontSize="large" />
            <span className="text-secondary text-lg">{text}</span>
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col gap-8">
        {/* MAP */}
        <div className="w-full h-64 md:h-48 rounded-xl overflow-hidden border border-border">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6767051051027!2d90.3855576!3d23.8769581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41236d2a3f3%3A0xb875079410f38d0d!2sHOUSE%20%23%2072%20Rd%20No%2015%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd"
          />
        </div>

        {/* CONTACT FORM */}
        <div className="bg-surface border border-border p-8 rounded-xl">
          <h2 className="text-3xl font-bold pb-6">
            How Can I <span className="text-accent">Help You?</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="bg-surfaceMuted p-4 rounded border border-border
              focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="bg-surfaceMuted p-4 rounded border border-border
              focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="bg-surfaceMuted p-4 rounded border border-border
              focus:outline-none focus:ring-2 focus:ring-accent col-span-2"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Message"
              required
              className="bg-surfaceMuted p-4 rounded border border-border
              focus:outline-none focus:ring-2 focus:ring-accent col-span-2"
            />

            {/* Fake CAPTCHA
            <div className="bg-surfaceMuted border border-border p-4 rounded col-span-2 flex items-center gap-4">
              <input type="checkbox" required className="w-5 h-5" />
              <span className="text-secondary">I'm not a robot</span>
              <span className="ml-auto text-muted text-xs">reCAPTCHA</span>
            </div> */}

            <button
              type="submit"
              disabled={loading}
              className="col-span-2 p-4 rounded-xl font-bold
              border-2 border-accent text-accent
              hover:bg-accent hover:text-black transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="col-span-2 text-green-600 font-medium">{success}</p>
            )}

            {error && (
              <p className="col-span-2 text-red-600 font-medium">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
