import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Andrew Li | Laporatory" />
        <meta property="og:image" content="/og_image.png" />
        <meta
          property="og:description"
          content="a Computer Science student, interested in UX/UI Design, Software Development, and Product Management."
        />
        <meta
          name="description"
          content="a Computer Science student, interested in UX/UI Design, Software Development, and Product Management."
        />
        <meta property="og:url" content="https://www.laporatory.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <title>Andrew Li | Laporatory</title>
      </Head>
      <Nav />
      <motion.main>{children}</motion.main>
      <Footer />
    </>
  );
};

export default Layout;
