const getPosition = async () => {
  const h1 = await document.getElementsByTagName('h1')[0];
  console.log('esteeeee eeeees' + h1)
  return h1.innerHTML
}

export { getPosition }