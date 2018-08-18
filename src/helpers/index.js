export const generateUUID = () => {
  const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const firstPart = []
  const secondPart = []
  while (firstPart.length < 3) {
    const randomIndex = Math.ceil(Math.random() * 26)
    firstPart.push(alpha[randomIndex])
  }
  while (secondPart.length < 4) {
    const randomIndex = Math.ceil(Math.random() * 9)
    secondPart.push(numeric[randomIndex])
  }
  return firstPart.join("").concat(secondPart.join(""))
}
