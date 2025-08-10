// app.quicktype.io
import axios, { Axios } from "axios";
import { Product } from "./models/model.product";



(
  async () => {
    async function getProduct(): Promise<Product[]> {
      const rta = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products");
      return rta.data;
    }
    const products = await getProduct();
    console.log(products.map(item => `${item.id} - ${item.title}`))
  }
)
