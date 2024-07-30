import React from "react";
import "../CSS/Contact.css";
import Swal from "sweetalert2";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "7f39da3e-caa9-4618-bccf-ae8f1ad4b24f");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  };
  return (
    <section className="contact" id="contact">
      <form className="contact-form" onSubmit={onSubmit}>
        <h3 className="contact-heading">Contact</h3>
        <div className="contact-content">
          <label>Full Name</label>
          <input
            type="text"
            className="contact-input"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
        <div className="contact-content">
          <label>Full Address</label>
          <input
            type="email"
            className="contact-input"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>
        <div className="contact-content">
          <label>Your Message</label>
          <textarea
            name="message"
            className="contact-input contact-textarea"
            placeholder="Enter Your Message"
            required
          />
        </div>
        <button className="contact-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
