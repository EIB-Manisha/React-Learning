import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";

test("check component loads or not", () => {
    render(<ContactUs/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});
