export default function shuffle(str) {
  if (str.length < 2) return [str]

  let result = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (str.indexOf(char) != i)
    continue

    let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
    for (let permutation of shuffle(remainder)) {
      result.push(char + permutation)
    }
  }
  return result
}
