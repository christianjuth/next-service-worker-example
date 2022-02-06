// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function fetchText(url) {
  const res = await fetch(url)
  return await res.text()
}

async function fetchJson(url) {
  const res = await fetchText(url)
  return JSON.parse(res)
}

async function fetchImg(url) {
  const res = await fetch(url)
  return await res.blob()
}

export default async function handler(_, res) {
  let { message } = await fetchJson("https://dog.ceo/api/breeds/image/random")

  const blob = await fetchImg(message)


  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  res.setHeader('Content-Type', 'image/jpg')
  res.send(buffer)
}
