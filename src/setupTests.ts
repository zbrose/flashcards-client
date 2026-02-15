import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Manually call cleanup after each test to prevent memory leaks
// and ensure a fresh DOM for the next test.
afterEach(() => {
  cleanup();
});
