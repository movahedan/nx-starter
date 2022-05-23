it('Dummy test for hooks/test-utilities.test.ts', () => {
  expect(true).toBe(true);
});

export const waitForMilliseconds = (timeout: number): Promise<1> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, timeout);
  });
