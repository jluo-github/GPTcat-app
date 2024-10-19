import React from "react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "../../app/page";

test("Home Page", () => {
  render(<Home />);
  // Check if the heading is in the document
  const heading = screen.getByRole("heading", {
    level: 1,
    name: /Hello there/i,
  });

  expect(heading).toBeDefined();
});
