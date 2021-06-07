import ctaIllustrationDark from "../images/dark/cta-illustration-dark.svg";
import featuresBoxDark from "../images/dark/features-box-dark.svg";
import featuresIllustrationDark from "../images/dark/features-illustration-dark.svg";
import featuresIllustrationTopDark from "../images/dark/features-illustration-top-dark.svg";
import headerIllustrationDark from "../images/dark/header-illustration-dark.svg";
import heroMediaDark from "../images/dark/hero-media-dark.svg";
import heroMediaIllustrationDark from "../images/dark/hero-media-illustration-dark.svg";
import ctaIllustrationLight from "../images/light/cta-illustration-light.svg";
import featuresBoxLight from "../images/light/features-box-light.svg";
import featuresIllustrationLight from "../images/light/features-illustration-light.svg";
import featuresIllustrationTopLight from "../images/light/features-illustration-top-light.svg";
import headerIllustrationLight from "../images/light/header-illustration-light.svg";
import heroMediaIllustrationLight from "../images/light/hero-media-illustration-light.svg";
import heroMediaLight from "../images/light/hero-media-light.svg";

const darkImages = {
  headerIllustration: headerIllustrationDark,
  heroMediaIllustration: heroMediaIllustrationDark,
  heroMedia: heroMediaDark,
  featuresBox: featuresBoxDark,
  featuresIllustration: featuresIllustrationDark,
  featuresIllustrationTop: featuresIllustrationTopDark,
  ctaIllustration: ctaIllustrationDark
};

const lightImages = {
  headerIllustration: headerIllustrationLight,
  heroMediaIllustration: heroMediaIllustrationLight,
  heroMedia: heroMediaLight,
  featuresBox: featuresBoxLight,
  featuresIllustration: featuresIllustrationLight,
  featuresIllustrationTop: featuresIllustrationTopLight,
  ctaIllustration: ctaIllustrationLight
};

const darkTheme = {
  primary1: "white",
  paragraph: "#8595ae",
  header: "#e9edf3",
  background: "#182538",
  tabs: "#304057",
  behindScreen: "#202d3f",
  techStack: "aliceblue",
  helperText: "#cccccc",
  timeLine: "#e9edf3",
  images: darkImages
};

const lightTheme = {
  primary1: "black",
  behindScreen: "#E9EDF3",
  paragraph: "#384e71",
  background: "#f5f5f5",
  tabs: "#E9EDF3",
  helperText: "#2d2c2c",
  header: "#4e4b4b",
  timeLine: "#384e71",
  images: lightImages
};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;

// #6B7A90 light paragraph
