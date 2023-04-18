import ThemeProvider from "@/theme";

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
