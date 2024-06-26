<!--------------- 1.Component-->Product.js (Without Props)------------------------>

function Product() {
    return (
      <div>
        <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt="sneakers" />
        <h4>Cyxus</h4>
        <p>Non-Slip Fitness Leisure Running Sneakers</p>
        <h4>$29</h4>
      </div>
    );
}
export default Product


<!----------------------2.components----->Product.js (With Props)----------------------------------->

function Product(props) {
    return (
      <div>
//it uses the value of props by defining the parameter as props objects
        <img src={props.img} alt="products" />
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
      </div>
    );
}

export default Product

<!------------------------3.app.js----------------------->

import Product from "./Product"

function App() {
  return (
      <div>
      	<h1>PRODUCTS</h1>
      	<div className="App">
      		<Product />
      	</div>
      </div>
  )
}

export default App

<!---------------4.app.js-------------------------->

import Product from "./Product";

function App() {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <div className="App">
        <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
          name="Cyxus"
          desc="Non-Slip Fitness Leisure Running Sneakers"
          price="$29"
        />
        <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
          name="Vitike"
          desc="Latest Men Sneakers -Black"
          price="$100"
        />
        <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
          name="Aomei"
          desc="Men's Trend Casual Sports Shoe"
          price="$40"
        />
      </div>
    </div>
  );
}

export default App;



