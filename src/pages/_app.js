import ThemeProvider from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <img
        src="/images/Savannah_icon.png"
        alt="heroImg"
        style={{ maxWidth: "20rem", position: "absolute", top: "1rem", left: "2rem", width: "40px" }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
