import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other head elements as needed */}
      </Head>

      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NCK5S00XCG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NCK5S00XCG');
        `}
      </Script>

      {/* Render the page */}
      <Component {...pageProps} />
    </>
  );
}