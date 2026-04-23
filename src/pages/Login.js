function Login() {
  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h2>Login</h2>
        <input placeholder="Email" style={{ display: "block", marginBottom: "10px" }} />
        <input placeholder="Password" type="password" style={{ display: "block", marginBottom: "10px" }} />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;