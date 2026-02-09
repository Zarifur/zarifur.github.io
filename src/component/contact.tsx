import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess("Message sent successfully! I’ll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again later.");
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6767051051027!2d90.3855576!3d23.8769581"
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

            {/* Fake CAPTCHA */}
            <div className="bg-surfaceMuted border border-border p-4 rounded col-span-2 flex items-center gap-4">
              <input type="checkbox" required className="w-5 h-5" />
              <span className="text-secondary">I'm not a robot</span>
              <span className="ml-auto text-muted text-xs">reCAPTCHA</span>
            </div>

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
