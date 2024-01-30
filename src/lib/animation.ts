export function genAnimationDelays(
  len: number,
  start_delay: number,
  delay_amount:
  number
): Array<number> {
  let cardDelays: Array<number> = [];

  // Including the first one
  let delay = start_delay;
  for (let _ of Array(len)) {
    cardDelays.push(delay);
    delay += delay_amount;
  }

  return cardDelays;
}
