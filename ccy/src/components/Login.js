const Login = () => {
  return (
    <section className="login">
      <form className="login-form">
        <label htmlFor="username">ID</label>
        <input type="text" id="username"/>
        <label htmlFor="password">PW</label>
        <input type="password" id="password"/>
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login;