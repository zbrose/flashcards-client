import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CreateForm from "./CreateForm";

describe("Home page", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <CreateForm />
      </MemoryRouter>,
    );

    expect(screen.getByTestId(/create-form/i)).toBeInTheDocument();
  });
});
