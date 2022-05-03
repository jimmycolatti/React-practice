function Products() {
  const products = ["phone", "display glass", "charger", "AirPods"]

  return (
    <div>
      <h2> Products List </h2>
      <i>
        <u> (Example using a list of strings) </u>
      </i>

      {products.map((el, index) => {
        return <p key={index}> {el} </p>
      })}
    </div>
  )
}

export default Products
