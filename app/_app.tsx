import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NCK5S00XCG');
          `}
        </script>
      </Head>
      <div>
        {/* Your page content */}
      </div>
    </>
  );
}