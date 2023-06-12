export function* chunksGenerator<T>(arr: T[], n: number): Generator<T[], void> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export const chunks = <T>(arr: T[], n: number) =>
  Array.from(chunksGenerator(arr, n));

export const splitArrayAt = <T>(arr: T[], i: number) => [
  arr.slice(0, i),
  arr.slice(i),
];

export const halfArray = <T>(arr: T[]) =>
  splitArrayAt(arr, Math.ceil(arr.length / 2));
