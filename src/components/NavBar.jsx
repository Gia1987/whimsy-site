import { colors } from "../theme";
import useWindowSize from "../hook/useWindowSize";

const NavBar = () => {
  const size = useWindowSize();
  const isMobile = size.width < 900;
  return (
    <nav style={styles.navbar}>
      <a style={styles.link} href="/whimsy-site/">
        <img
          style={styles.logo}
          src="/whimsy-site/logo/stacked-whimsy-logo.svg"
          alt="logo"
        />
      </a>
      <div style={isMobile ? styles.contentMobile : styles.contentDesktop}>
        <div
          style={isMobile ? styles.linkContainerMobile : styles.linkContainer}
        >
          {isMobile ? (
            <>
              <a href="/whimsy-site/contact" style={styles.link}>
                <img
                  style={styles.icons}
                  src="/whimsy-site/icons/contact-icon.svg"
                  alt="contact"
                />
              </a>
              <a href="/whimsy-site/about" style={styles.link}>
                <img
                  style={styles.icons}
                  src="/whimsy-site/icons/info-icon.svg"
                  alt="about"
                />
              </a>
            </>
          ) : (
            <>
              <a href="/whimsy-site/contact" style={styles.link}>
                Contact
              </a>
              <a href="/whimsy-site/about" style={styles.link}>
                About
              </a>
            </>
          )}
        </div>
        <div style={styles.iconContainer}>
          <a
            href="https://www.tiktok.com/@whimsbynada?_t=8pqqDSTFlHl&_r=1"
            style={styles.link}
          >
            <img
              style={styles.icons}
              src="/whimsy-site/icons/tiktok-black-icon-seeklogo.svg"
              alt="tiktok"
            />
          </a>
          <a
            href="https://www.instagram.com/whimsybynada/?hl=en-gb"
            style={styles.link}
          >
            <img
              style={styles.icons}
              src="/whimsy-site/icons/black-instagram-icon.svg"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "60px",
    color: colors.black,
  },
  contentDesktop: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "800px",
  },
  contentMobile: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "800px",
  },
  linkContainerMobile: {
    display: "flex",
  },
  linkContainer: {
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
  },
  iconContainer: {
    display: "flex",
  },
  icons: {
    width: "70px",
    height: "70px",
    padding: "10px",
  },
  link: {
    color: colors.black,
    textDecoration: "none",
  },
  logo: {
    width: "100%",
    height: "500px",
  },
};

export default NavBar;
