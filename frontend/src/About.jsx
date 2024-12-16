export default function About() {
    return (
      <div className="about-layout">
        <div>
          <h1>About Us</h1>
          <p>
          We are an innovative startup specializing in developing blockchain-based traceability platforms, 
          providing transparency, security, and efficiency for tracking goods and responsibilities
          </p>
        </div>
        <img
          src="../public/logo.png"
          height="200rem"
          width="200rem"
          className="rounded"
          alt=""
        />
      </div>
    );
  }