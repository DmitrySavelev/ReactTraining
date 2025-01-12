import { useEffect, useState } from "react";
import r from "./Register.module.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/main");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !password || !emailRegex.test(email)) {
      alert("Пожалуйста, заполните все поля корректно.");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    navigate("/main");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={r.popup}>
        <input type="text" required onChange={(e) => setName(e.target.value)} />
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Войти</button>
      </div>
    </form>
  );
}

export default Register;
