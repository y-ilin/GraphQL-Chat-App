import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Chat from "./Chat";

describe("Chat component", () => {
  it("given a user clicks the 'Send' button, a chat bubble will render showing the message", async () => {
    const randomMessage = Math.random();

    render(<Chat />);

    fireEvent.change(screen.getByTestId("message-input"), {
      target: { value: randomMessage },
    });

    fireEvent(
      screen.getByText("Send"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    await waitFor(() => screen.debug());

    await waitFor(() =>
      expect(screen.getByText(randomMessage)).toBeInTheDocument()
    );
  });
});
