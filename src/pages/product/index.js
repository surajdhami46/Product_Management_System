import { Pagination, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../../component/card/productCard'

export default function Product() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [product, setProduct] = useState([])

  const getAllProduct = async () => {
    setLoading(true)
    try {

      const { data } = await axios.get('https://dummyjson.com/products')

      if (data) {
        setLoading(false)
        setProduct(data.products)
      }

    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }

  }

  useEffect(() => {
    getAllProduct()
  }, [])


  if (loading) {
    return <div className=' flex items-center justify-center'> <Spin /></div>
  }

  return (
    <div className=' px-[60px]'>
      <div className=' grid grid-cols-3 justify-between gap-[20px]'>
        {
          product.map(item => <ProductCard key={item.id} data={item} />)
        }
      </div>
      <div className='flex items-center justify-center p-[20px]'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}
