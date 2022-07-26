import * as exercises from './myExercises';


export function logs(): void {
  console.log('Area do losángulo')
  console.log('primeiro:', exercises.losangleArea(0.32, 0.18).toFixed(2))
  console.log('segundo:', exercises.losangleArea(2, 0.5).toFixed(2))
  console.log('terceiro:', exercises.losangleArea(0.75, 0.25).toFixed(2))

  console.log('Area do trapézio')
  console.log('primeiro:', exercises.trapezeArea(1, 0.7, 0.5).toFixed(2))
  console.log('segundo:', exercises.trapezeArea(0.75, 0.5, 0.35).toFixed(2))
  console.log('terceiro:', exercises.trapezeArea(1.5, 1.2, 0.8).toFixed(2))

  console.log('Area do circulo')
  console.log('primeiro:', exercises.circleArea(0.25).toFixed(2))
  console.log('segundo:', exercises.circleArea(1).toFixed(2))
  console.log('terceiro:', exercises.circleArea(0.125).toFixed(2))
}