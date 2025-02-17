import "./Redes.css";

const MisRedes = () => {
  return (
    <div className="redes-container">
      <nav>
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/thiagosoubielle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="red-img"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/titirey18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/git.png"
                alt="GitHub"
                className="red-img"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thiago_soubielle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/instagram.png"
                alt="Instagram"
                className="red-img"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MisRedes;
