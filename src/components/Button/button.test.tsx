/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("Input", () => {
  test("should be render a button and attributes", () => {
    render(
      <Button variant="primary" disabled={false}>
        Click me
      </Button>
    );
    const buttonElement = screen.getByRole("button");

    //print de como esta sendo definido o componente de teste
    // screen.debug();

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn btn-primary");
    expect(buttonElement).not.toBeDisabled();
  });

  test("Check click of button", () => {
    const handleClick = jest.fn();

    //renderiza o componente Button e pega a referência do elemento
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByRole("button");

    //Simular o clique do botão usando fireEvent
    fireEvent.click(button);

    // verifica se a função mock foi chamada
    expect(handleClick).toHaveBeenCalled();
  });
});
