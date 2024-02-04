export const mapOrder = (originArray, orderArray, key) => {
  if (!originArray || !orderArray || !key) return []

  const clonedArray = [...originArray]
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })

  return orderedArray
}