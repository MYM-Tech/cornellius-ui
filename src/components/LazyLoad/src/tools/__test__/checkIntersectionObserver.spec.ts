
import { expect, it } from "vitest";
import { checkIntersectionObserver } from "../checkIntersectionObserver";

it("should return false when we not have intesection", ()=> {
    expect(checkIntersectionObserver()).toBe(false)
})