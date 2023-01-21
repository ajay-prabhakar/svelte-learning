export async function load({ data, params, fetch }) {
  const id = params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const guide = await res.json()

  console.log(guide)
  if (res.ok) {
    return {
      guide
    }
  }
  return {
    status: res.status,
    error: new Error('Could not fetch that guide')
  }
}