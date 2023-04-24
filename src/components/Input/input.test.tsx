/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Input, { handleChange } from "./index";

describe("Input", () => {
  test("Should be render a Input with attributes", () => {
    const onChangeMock = jest.fn();
    const { container } = render(
      <Input
        type="text"
        value={"input"}
        placeholder="Digite aqui..."
        onChange={onChangeMock}
      />
    );

    const inputElement = screen.getByPlaceholderText("Digite aqui...");

    expect(container.firstChild).toMatchSnapshot();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("Should be call onChange with a brand new value", () => {
    const onChange = jest.fn();

    const event = {
      target: { value: "10" },
    } as React.ChangeEvent<HTMLInputElement>;
    handleChange(event, onChange);

    expect(onChange).toHaveBeenCalledWith("10");
  });
});
