import Specialist from "./specialist.ts";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

function removeSpaces(str: string) {
  return str.replace(/\s+/g, " ");
}

describe("Classes: Specialist", () => {
  it("basics work", () => {
    const employee2 = new Specialist("Owen", 14);
    assert.equal(employee2.sayHi(), `Owen says “hi”`);
    assert.equal(
      removeSpaces(employee2.safetyQuote()),
      removeSpaces(`Never turn your back to the cage.
                Trust me, I have 14 years of experience`)
    );
  });
});
