"use client";

import NextAuth from "next-auth/next";
import React from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
type Props = {
  session: Session;
};

const Homepage = (props: Props) => {
  return (
    <SessionProvider session={props.session}>
      <div className="container py-10 mx-auto"></div>;
    </SessionProvider>
  );
};

export default Homepage;

// create table link
// https://www.youtube.com/watch?v=Jgr8JjYOJsU
// https://github.com/Elliott-Chong/shadcn-table-yt
