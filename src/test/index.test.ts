import { rand } from "../app/util";

test("The random number is a meme", () => {
    expect(rand()).toBe(4);
});
