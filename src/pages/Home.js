import profile from "../profile.jpg.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className="container">

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">Nagerla Varsha</div>

        <div className="nav-links">
          <a href="/#/" className="active">Home</a>
          <a href="/#/projects">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">

        <div className="hero-left">
          <img src={profile} alt="profile" />
        </div>

        <div className="hero-right">
          <h3>Hello, I'm</h3>
          <h1>Nagerla Varsha</h1>
          <h2>Computer Science Student</h2>

          <p>
            Passionate about web development and building user-friendly applications.
          </p>
        </div>

      </div>

      {/* CARDS */}
      <div className="cards">

        <div className="card">
          <h3>👤 About Me</h3>
          <p>
            I am a Computer Science student passionate about web development and building modern web applications.
          </p>
        </div>

        <div className="card">
          <h3>💡 Research Interests</h3>
          <div className="tags">
            <span>AI</span>
            <span>Web Development</span>
          </div>
        </div>

      </div>

      {/* DETAILS */}
      <div className="details">
        <h3>🪪 Personal Details</h3>

        <div className="detail-row">
          <span>📞 Phone</span>
          <span>9392964001</span>
        </div>

        <div className="detail-row">
          <span>📧 Email</span>
          <span>varshanagerla@gmail.com</span>
        </div>

        <div className="detail-row">
          <span>🎓 College Email</span>
          <span>se23umcs070@mahindrauniversity.edu.in</span>
        </div>

        <div className="detail-row">
          <span>💻 Skills</span>
          <span>HTML, CSS, JavaScript, React, Java, Python</span>
        </div>

      </div>

    </div>
  );
}

export default Home;