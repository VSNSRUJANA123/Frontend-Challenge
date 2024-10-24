import { useState } from "react";
const App = () => {
  const [form, setForm] = useState({ username: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState(false);
  const handleUser = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setForm({ username: "", email: "", message: "" });
    setSubmitStatus(true);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {submitStatus ? (
        <div
          style={{
            padding: "20px",
            borderRadius: "20px",
            boxShadow:
              " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          }}
        >
          <h2 style={{ color: "green" }}>🎉Congrats</h2>
          <h3>Successfully Submit your details</h3>
        </div>
      ) : (
        <form
          onSubmit={submitForm}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            padding: "10px",
            boxShadow:
              " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <h1 style={{ color: "#004c00" }}>User Form</h1>
          <input
            required
            placeholder="name"
            type="text"
            name="username"
            onChange={handleUser}
            value={form.username}
            style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
          />
          <input
            required
            placeholder="email"
            type="email"
            name="email"
            onChange={handleUser}
            value={form.email}
            style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
          />
          <textarea
            cols="40"
            rows="10"
            placeholder="message"
            type="text"
            name="message"
            onChange={handleUser}
            value={form.message}
            style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
          />
          <button
            style={{
              width: "130px",
              padding: "10px",
              color: "#004c00",
              cursor: "pointer",
              background: "transparent",
              border: "1px solid #004c00",
            }}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
