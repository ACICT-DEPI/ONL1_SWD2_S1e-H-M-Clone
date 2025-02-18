import React from 'react'
import SortBy from '../SortBy'
import FilterBy from './FilterBy'
import { useLocation, useParams } from 'react-router-dom'

const Filters = ({
    products,
}: {
    products: {
        id: string
        name: string
        image: string
        price: number
        category: string
        color: string
        size: string
    }[]
}) => {
    const priceCounts = products.reduce((acc, product) => {
        acc[product.price] = (acc[product.price] || 0) + 1
        return acc
    }, {})

    const colorCounts = products.reduce((acc, product) => {
        acc[product.color] = (acc[product.color] || 0) + 1
        return acc
    }, {})

    const sizeCounts = products.reduce((acc, product) => {
        acc[product.size] = (acc[product.size] || 0) + 1
        return acc
    }, {})

    const colorCountArray = Object.entries(colorCounts).map(
        ([name, count]) => ({ name, count: Number(count), label: name })
    )
    const priceCountArray = Object.entries(priceCounts).map(
        ([price, count]) => ({ name: price, count: Number(count) })
    )
    const sizeCountArray = Object.entries(sizeCounts).map(([name, count]) => ({
        name,
        label: name,
        count: Number(count),
    }))
    // const categoryCounts = products.reduce((acc, product) => {
    //     acc[product.category] = (acc[product.category] || 0) + 1
    //     return acc
    // }, {})
    // const categoryCountArray = Object.entries(categoryCounts).map(
    //     ([category, count]) => ({
    //         name: category,
    //         label: category,
    //         count: Number(count),
    //     })
    // )
    // categoryCountArray.forEach((category) => {
    //     if (category.name === 'kids') {
    //         category.label = 'اطفال'
    //     }
    //     if (category.name === 'women') {
    //         category.label = 'نساء'
    //     }
    //     if (category.name === 'men') {
    //         category.label = 'رجال'
    //     }
    // })
    return (
        <div className="flex flex-wrap gap-2 my-2 justify-evenly sm:justify-start">
            <SortBy />
            <FilterBy
                FilterName="السعر"
                key="السعر"
                filter="price"
                filters={priceCountArray}
                // updateFilter={updateFilter}
            />
            <FilterBy
                FilterName="المقاس"
                key="المقاس"
                filter="size"
                filters={sizeCountArray}
                // updateFilter={updateFilter}
            />
            <FilterBy
                FilterName="اللون"
                key="اللون"
                filter="color"
                filters={colorCountArray}
                // updateFilter={updateFilter}
            />
            {/* {!shop ||
                (pathname === '/search' && (
                    <FilterBy
                        FilterName="التصنيف"
                        key="التصنيف"
                        filter="category"
                        filters={categoryCountArray}
                        // updateFilter={updateFilter}
                    />
                ))} */}
        </div>
    )
}

export default Filters
