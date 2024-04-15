import { render, screen } from "@testing-library/react";

import CTASection from "../components/CTASection";

describe("<CTASection />", () => {
  it("should render the CTASection component", () => {
    const { container } = render(<CTASection />);

    expect(screen.getByText(/Use This Template/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /Repository/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toBeInTheDocument();
  });
});
