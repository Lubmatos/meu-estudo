import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import { describe, it, expect } from "vitest";

describe("Página Home", () => {
  it("renderiza o título da página", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("Lista de Alunos")).toBeTruthy();
  });
});
