import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "./Nav";
import Footer from "../sections/footer";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default ({ children }) => (
  <div className="root">
    <Head>
      <title>Body Home Motivation</title>
    </Head>
    <Nav />
    {children}
    <Footer />
    <style jsx>{``}</style>
  </div>
);
