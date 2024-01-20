// Given the previus score, and the value of the current checkmark, computes the current score for habit.

export default function getScore(prevScore, value) {
  const multiplier = Math.pow(0.5, 1 / 13);
  let score = prevScore * multiplier;
  score += value * (1 - multiplier);
  
  return score;
}


  
