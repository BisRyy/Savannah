import Career from "@/sections/career";
import Hero from "@/sections/hero";
import { useState } from "react";
import data from '../sections/data'

export default function Home() {
  return (
    <>
      {/* <h1>Holla</h1> */}
      <Hero />
      <Career data={data[0]} />
    </>
  );
}
