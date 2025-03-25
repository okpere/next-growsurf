'use client';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://growsurf.com/growsurf.js';
    script.async = true;
    
    

    script.onload = () => {
      console.log('GrowSurf script loaded.');
    };
    document.body.appendChild(script);

  }, []);
  return (
    <html lang='en'>
      <head>
      <script
        type='text/javascript'
        id="growsurf-script"
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
