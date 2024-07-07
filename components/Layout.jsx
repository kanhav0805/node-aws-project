"use client";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import nProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";
import { isAuth, logout } from "../helpers/auth";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";

// Setup route change events for nProgress
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(isAuth());
    }
  }, []);

  console.log(user);

  // Head section
  const head = () => (
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link href="/static/css/styles.css" rel="stylesheet" />
    </Head>
  );

  // Navbar
  const nav = () => (
    <div className="w-100">
      <ul className="nav nav-tabs nav-fill bg-primary-subtle d-flex justify-content-between w-100">
        <div className="d-flex">
          <li className="nav-item">
            <Link href="/" className="nav-link text-primary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/user/link/create"
              class="btn btn-success my-1 border-0"
            >
              Submit a Link
            </Link>
          </li>
          {!user && (
            <>
              <li className="nav-item">
                <Link href="/login" className="nav-link text-primary">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register" className="nav-link text-primary">
                  Register
                </Link>
              </li>
            </>
          )}
        </div>
        {user && (
          <div className="d-flex">
            {user.role === "admin" && (
              <li className="nav-item">
                <Link href="/admin" className="nav-link text-primary">
                  {user.name}
                </Link>
              </li>
            )}
            {user.role === "subscriber" && (
              <li className="nav-item">
                <Link href="/user" className="nav-link text-primary">
                  {user.name}
                </Link>
              </li>
            )}
            <li
              className="nav-item"
              onClick={() => logout(() => router.push("/login"))}
            >
              <a className="nav-link text-primary">Logout</a>
            </li>
          </div>
        )}
      </ul>
    </div>
  );

  return (
    <Fragment>
      {head()}
      {nav()}
      <div className="container pt-5 pb-5">{children}</div>
    </Fragment>
  );
};

export default Layout;
