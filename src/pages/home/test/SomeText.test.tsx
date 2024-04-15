import { render, screen } from "@testing-library/react";

import SomeText from "../components/SomeText";

describe("<SomeText />", () => {
  it("should render the SomeText component", () => {
    const { container } = render(<SomeText />);

    expect(
      screen.getByRole("heading", {
        name: /vite-react-typescript-tailwind-docker-starter/i,
        level: 1,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: "React logo" })).toBeInTheDocument();

    expect(container.firstChild).toBeInTheDocument();
  });
});
