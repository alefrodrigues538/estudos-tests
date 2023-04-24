/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Image from ".";

describe("Image", () => {
  test("renders an image with the correct URL and alt text", () => {
    const url =
      "https://banderart.com.br/wp-content/uploads/2015/04/quadriculada1-2.jpg";
    const alt = "alt image";
    render(<Image imgUrl={url} altText={alt} />);

    const image = screen.getByAltText(alt);

    expect(image).toHaveAttribute("src", url);
    expect(image).toBeInTheDocument();
  });
});
