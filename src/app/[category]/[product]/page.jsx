"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ProductPageLoader from "@/components/ProductPageLoader";

export default function ProductPage() {
    const [product, setProduct] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        async function getProduct() {
            try {
                const url = pathname.split("/")[2].split("-").slice(-1)[0];
                const response = await axios.get(
                    `https://localhost:7113/api/Product/${url}`
                );

                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        getProduct();
    }, [pathname]);

    console.log(product);

    if (product.length === 0) {
        return <ProductPageLoader />;
    }

    return (
        <section className="w-full flex justify-center">
            <div className="w-2/3 flex justify-center gap-5 pt-10">
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-3 ">
                        <Image
                            src="/Images/nike.webp"
                            alt="NIke"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/Images/nike.webp"
                            alt="NIke"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/Images/nike.webp"
                            alt="NIke"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/Images/nike.webp"
                            alt="NIke"
                            width={70}
                            height={70}
                        />
                        <Image
                            src="/Images/nike.webp"
                            alt="NIke"
                            width={70}
                            height={70}
                        />
                    </div>
                    <div>
                        <Image
                            src="/Images/nike.webp"
                            alt="NIke"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <span className="m-0 p-0 font-semibold text-xl text-gray-500">
                            {product.categoryName}
                        </span>
                        <span className="font-semibold text-2xl">
                            ${product.price}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <Link
                            href="/"
                            className="font-bold text-gray-600 flex items-center mb-1"
                        >
                            <PersonRoundedIcon />
                            {product.sellerName}
                        </Link>
                        <span className="text-gray-600 font-bold flex items-center">
                            <LocationOnRoundedIcon />
                            {product.sellerLocation}
                        </span>
                        <div className="flex flex-col font-semibold mt-3">
                            <span>Size: {product.size}</span>
                            <span>Color: {product.color}</span>
                            <span>Brand: {product.brandName}</span>
                        </div>
                        <div className="my-5 flex flex-col">
                            <p className="font-bold">Description</p>
                            <p>{product.description}</p>
                        </div>
                        <div className="mb-3">
                            <button className="bg-black text-white text-l font-semibold py-5 px-8 rounded-full w-full border border-black">
                                Add to Wishlist
                            </button>
                        </div>

                        <span className="font-bold text-2xl">
                            Contact the Seller
                        </span>

                        <div className="flex gap-5">
                            <span>Icon</span>
                            <span>Icon</span>
                            <span>Icon</span>
                            <span>Icon</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
