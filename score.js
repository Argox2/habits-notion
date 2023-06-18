// Given the previus score, and the value of the current checkmark, computes the current score for habit.

export function score(prevScore, checkmarkvalue) {
  const multiplier = Math.pow(0.5, 1 / 13.0);
  let score = prevScore * multiplier;
  score += checkmarkvalue * (1 - multiplier);
  
  return score;
}


  
