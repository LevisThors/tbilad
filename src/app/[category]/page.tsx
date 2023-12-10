"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { ProductCardLoader } from "@/components/ProductCard";
import SortAndFilter from "@/components/SortAndFilter";
import axios from "axios";

export default function Category() {
    const [products, setProducts] = useState([]);
    const pathName = usePathname().split("/")[1];

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await axios.get(
                    "https://localhost:7113/api/Product"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        getProducts();
    }, []);

    console.log(products);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col justify-center gap-4">
                <div className="w-full flex justify-between">
                    <h1 className="text-start font-bold text-3xl">
                        {pathName.toUpperCase()}
                    </h1>
                    <SortAndFilter />
                </div>

                <section className="grid grid-cols-3 gap-5">
                    {!products.length && <ProductCardLoader />}

                    {products.map((product, index: number) => {
                        return (
                            <ProductCard
                                key={index}
                                name={product.name}
                                category={product.categoryName}
                                price={product.price}
                                id={product.id}
                                quantity={101}
                            />
                        );
                    })}
                </section>
            </div>
        </main>
    );
}
