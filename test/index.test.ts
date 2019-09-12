import { helloWorld } from "../src";

test('Should return helloWorld', () => {
  expect(helloWorld()).toBe('Hello world!')
})