import { useState } from "react";
import { colors } from "../theme";
import { send } from "@emailjs/browser";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ChartCount, setChartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [error, setError] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setMessage(text);
      setChartCount(text.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFeedbackMessage("");

      const response = await send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          email,
          message,
        },
        {
          publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );
      if (response.status === 200) {
        setEmail("");
        setMessage("");
        setFeedbackMessage("Email sent successfully!");
      }
    } catch (err) {
      setFeedbackMessage("Failed to send email. Please try again.");
      setError(err);
    } finally {
      setLoading(false);
    }
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.75rem",
      fontSize: "24px",
      color: `${colors.black}`,
      backgroundColor: `${colors.white}`,
      border: `2px solid ${colors.black}`,
      borderRadius: "4px",
      cursor: "pointer",
      opacity: `${loading && "0.5"}`,
    },
    spinner: {
      marginLeft: "0.5rem",
      border: "2px solid #f3f3f3",
      borderRadius: "50%",
      borderTop: `2px solid ${colors.blue}`,
      width: "14px",
      height: "14px",
      animation: "spin 1s linear infinite",
    },
    feedbackMessage: {
      textAlign: "center",
      margin: "unset",
      fontSize: "1.5rem",
      color: `${error ? colors.red : colors.green}`,
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="email" style={styles.label}>
        Email:
      </label>
      <input
        type="email"
        placeholder="example@gmail.com"
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
      <button type="submit" style={styles.button} disabled={loading}>
        Send {loading && <div style={styles.spinner}></div>}
      </button>
      {feedbackMessage && (
        <p style={styles.feedbackMessage}>{feedbackMessage}</p>
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
};

export default Form;
