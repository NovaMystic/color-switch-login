import { useState } from "react";

export default function LoginForm() {
  const [activeColor, setActiveColor] = useState("");

  const handleColorChange = (color) => {
    document.body.style.background = color;
    setActiveColor(color);
  };

  const colors = [
    { color: "#68a6e8" },
    { color: "#ff3636" },
    { color: "#466b53" },
    { color: "#fa8eb2" },
    { color: "#faad5a" },
  ];

  const borderStyle = { borderColor: activeColor };

  return (
    <>
      <div className="login">
        <h2 style={borderStyle}>Login</h2>
        <div className="inputBox">
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password" />
        </div>
        <div className="inputBox">
          <input
            type="input"
            value="Login"
            id="btn"
            style={{ background: activeColor }}
          />
        </div>
        <div className="group">
          <a href="#">Forgot Password</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
      <div className="colors">
        {colors.map(({ color }) => (
          <span
            key={color}
            className={activeColor === color ? "active" : ""}
            style={{ "--clr": color }}
            onClick={() => handleColorChange(color)}
          ></span>
        ))}
      </div>
    </>
  );
}
