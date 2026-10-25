"use client";

import { useState } from "react";

const Test2 = () => {
  console.log("test-2 render oldu");
  useState();

  return (
    <div>
      <h1>Test-2</h1>
      <h1 onClick={() => alert("deneme")}>Client Component</h1>
    </div>
  );
};

export default Test2;
