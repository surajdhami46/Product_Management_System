import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "./ProductTable";
import { Button, Dropdown, message } from "antd";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState([])


  const [loading, setLoading] = useState(false)

  const [resetDisable, setResetDisable] = useState(true)



  const fetchProducts = async () => {
    setLoading(true)
    const { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);
    setLoading(false)
  };


  const fetCategory = async () => {

    try {

      const { data } = await axios.get('https://dummyjson.com/products/categories')

      const a = data.map(item => ({
        key: item.url,
        label: item.name,
        url: item.url
      }))


      setCategory(a)
    } catch (error) {
      message.error('Error in category')
    }


  }

  useEffect(() => {

    fetchProducts();
    fetCategory()
  }, []);



  const handleSummit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    const name = formData.get('name')

    const { data } = await axios.get(`https://dummyjson.com/products/search?q=${name}`)

    setProducts(data.products)

    setLoading(false)
    setResetDisable(false)

    console.log(name)
  }


  const handleCategoryProduct = async (url) => {
    try {
      setResetDisable(false)
      setLoading(true)
      const { data } = await axios.get(url)

      setProducts(data.products)
      setLoading(false)


    } catch (error) {
      message.error('error in categroy product')
    }
  }





  return (
    <div className="px-[60px]">
      <div className=" flex items-center justify-between mb-[20px]">
        <h1 className=" font-bold text-[32px] leading-[24px]">Product List</h1>
        <div className="flex items-center gap-x-[10px]">
          <Dropdown
            menu={{
              items: category,
              onClick: (item) => handleCategoryProduct(item.key)
            }}
          >
            <button className="btn"> All category </button>
          </Dropdown>
          <form class="d-flex" onSubmit={handleSummit}>
            <input type="text" name="name" class="form-control me-2" />
            <button type='submit' class="btn btn-outline-primary">Search</button>
          </form>
          <Button type='submit' className="btn "
            disabled={resetDisable}
            onClick={() => {
              setResetDisable(true)
              fetchProducts()
            }}
          >Reset</Button>
        </div>
      </div>
      <ProductTable products={products} loading={loading} />
    </div>
  );
};

export default ProductList;
