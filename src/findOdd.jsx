export default function findOdd(numArr) {
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
