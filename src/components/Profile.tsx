import "./Profile.module.css";
const Profile = () => {
  return (
    <div className="container">
      <div className="profile">
        <img
          src="https://i.seadn.io/s/raw/files/4393e64fb2353c32b857bc19fa17f31d.png?auto=format&dpr=1&w=1000"
          alt="Foto Profil"
          className="profile-img"
        />
        <h1>Muhammad Masyhuda</h1>
        <p className="about-me">
          Saya adalah seorang web developer dengan passion dalam pengembangan
          web. Saya memiliki pengalaman dalam HTML, CSS, dan TypeScript, serta
          framework seperti React.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
          <a href="https://www.github.com/huda-7077" target="_blank">
            GitHub
          </a>
          <a href="https://www.x.com/huda7077" target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
