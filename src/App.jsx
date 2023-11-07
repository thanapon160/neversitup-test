import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function shuffle(str) {
    if (str.length < 2) return str

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

  function findOdd(numArr) {
    return numArr.find((item) => numArr.filter(el => el == item).length % 2)

    //  cost totalAppear = numArr.reduce((acc, cur) => {
    //   return acc[cur]
    //     ? { ...acc, [cur]: ++acc[cur] }
    //     : { ...acc, [cur]: 1}
    // }, {})
    // let result = 0
    // for (const num in totalAppear) {
    //   if (totalAppear[num] % 2) {
    //     result = num
    //     break;
    //   }
    // }
    // return result
  }

  function countSmileyFace(smileyFaces) {
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

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {shuffle('a')}
      <br/>
      {shuffle('ab')}
      <br/>
      {shuffle('abc')}
      <br/>
      {shuffle('aabb')}
      <br/>
      {findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])}
      {findOdd([7])}
      {findOdd([0])}
      {findOdd([1,1,2])}
      {findOdd([0,1,0,1,0])}
      <br/>
      {countSmileyFace([':)', ';(', ';}', ':-D'])}
      {countSmileyFace([';D', ':-(', ':-)', ';~)'])}
      {countSmileyFace([';]', ':[', ';*', ':$', ';-D'])}
    </>
  )
}

export default App
