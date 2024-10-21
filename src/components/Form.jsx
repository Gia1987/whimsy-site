import { useState } from "react";
import { colors } from "../theme";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ChartCount, setChartCount] = useState(0);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setMessage(text);
      setChartCount(text.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nMessage: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="email" style={styles.label}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
        style={styles.input}
      />

      <label htmlFor="message" style={styles.label}>
        Message:
      </label>
      <textarea
        id="message"
        value={message}
        placeholder="What would you like to discuss?"
        onChange={handleMessageChange}
        rows="5"
        style={styles.textarea}
      />
      <p style={styles.wordCount}>Charts Count: {ChartCount}/500</p>

      <button type="submit" style={styles.button}>
        Send
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: `${colors.white}`,
    borderRadius: "8px",
    border: `3px solid ${colors.black}`,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  label: {
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  },
  input: {
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: `1px solid ${colors.black}`,
  },
  textarea: {
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: `1px solid ${colors.black}`,
  },
  wordCount: {
    marginBottom: "1rem",
    fontSize: "1rem",
    textAlign: "right",
  },
  button: {
    padding: "0.75rem",
    fontSize: "24px",
    color: `${colors.black}`,
    backgroundColor: `${colors.white}`,
    border: `2px solid ${colors.black}`,
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Form;
