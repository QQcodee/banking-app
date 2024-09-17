"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp end={amount} prefix="$" decimal="," duration={1} decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
