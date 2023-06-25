export function wait(timeout: number): Promise<void> {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(undefined), timeout);
  });
}
