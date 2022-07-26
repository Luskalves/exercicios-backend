export function losangleArea(D: number, d: number): number {
  return (D * d) / 2;
}

export function trapezeArea(B: number, b: number, h: number): number {
  return ((B * b) * h) / 2;
}

export function circleArea(raio: number): number {
  return (raio ** 2) * 3.14;
}