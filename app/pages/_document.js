import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* GrowSurf Script inside <head> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(g,r,s,f){
                g.grsfSettings={campaignId:"10inlw",version:"2.0.0"};
                s=r.getElementsByTagName("head")[0];
                f=r.createElement("script");
                f.async=1;
                f.src="https://app.growsurf.com/growsurf.js"+"?v="+g.grsfSettings.version;
                f.setAttribute("grsf-campaign", g.grsfSettings.campaignId);
                !g.grsfInit?s.appendChild(f):"";
              })(window,document);
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
