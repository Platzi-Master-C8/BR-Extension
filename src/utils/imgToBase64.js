async function parseURI(d) {
  var reader = new FileReader();
  reader.readAsDataURL(d);
  return new Promise((res, rej) => {
    reader.onload = e => {
      res(e.target.result);
    };
  });
}

async function getDataBlob(url) {
  const res = await fetch(url);
  const blob = await res.blob();
  const uri = await parseURI(blob);
  return uri;
}

export { getDataBlob };
