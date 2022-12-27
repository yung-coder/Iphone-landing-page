import "../styles/globals.css";
import Header from "./Header";
const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
