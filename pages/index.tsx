import Head from "next/head";
import React from "react";
import Features from "../components/features";
import Hero from "../components/hero";
import Projects from "../components/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander May - Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero />
      <Features />
      <Projects />
    </>
  );
}