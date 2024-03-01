export const fetchData = () => {
  return fetch('https://fakestoreapi.com/products/')
    .then((response) => response.json())
    .then((result) => {
      return result
    })
}
