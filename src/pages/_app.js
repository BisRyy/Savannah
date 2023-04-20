import ThemeProvider from "@/theme";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Link href="/">
        <img
          src="/images/Savannah_icon.png"
          alt="heroImg"
          style={{
            maxWidth: "20rem",
            position: "absolute",
            top: "1rem",
            left: "2rem",
            width: "40px",
          }}
        />
      </Link>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
