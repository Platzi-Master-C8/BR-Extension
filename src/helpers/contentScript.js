const getPosition = async () => {
  const h1 = await document.getElementsByTagName('h1')[0];
  return h1.innerHTML
}

export { getPosition }