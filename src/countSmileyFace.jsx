export default function countSmileyFace(smileyFaces) {
  if (smileyFaces.length === 0) return 0
  const eyes = [';', ':']
  const noses = ["-", "~"]
  const mouths = [")", "D"]

  let count = 0
  smileyFaces.forEach((smileyFace) => {
    if (eyes.includes(smileyFace[0]) && ((noses.includes(smileyFace[1]) && mouths.includes(smileyFace[2])) || mouths.includes(smileyFace[1]))) count++
    return
  })
  return count
}
