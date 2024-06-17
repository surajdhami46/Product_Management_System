import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/card/productCard'
import { useLocation, useParams } from 'react-router-dom'
import { Image } from 'antd'

const DetailPage = () => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})

    const param = useParams()


    const detailProduct = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/${param.id}`)
            if (data) {
                setLoading(false)
                setProduct(data)
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        detailProduct()
    }, [])

    return (
        <div>
            <div>
                <Image src={product.images} alt='/' width={200} height={200} />
                <p>{product?.title}</p>
                <p>{product?.description}</p>
            </div>

        </div>
    )
}

export default DetailPage
