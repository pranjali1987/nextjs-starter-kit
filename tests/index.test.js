/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "../utils/custom-test";
import HomePage from "../pages/index";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<HomePage />);

    const heading = screen.getByText(/Search/i);

    expect(heading).toBeInTheDocument();
  });
});
