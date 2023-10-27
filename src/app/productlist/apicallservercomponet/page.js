const productsList = async()=>{
    let response = await fetch("https://dummyjson.com/products")
    response= await response.json();
    return response.products
}

const ApicallServerComponent = async()=> {
    let product= await productsList();
    console.log(product);
  return (
    <div>ApicallServerComponent</div>
  )
}

export default ApicallServerComponent