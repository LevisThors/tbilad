"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    name: string;
    price: number;
    quantity: number;
    category: string;
    id: number;
}

export default function ProductCard({
    name,
    price,
    quantity,
    category,
    id,
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const url =
        category.toLowerCase() +
        "/" +
        name.split(" ").join("-").toLowerCase() +
        "-" +
        id;

    return (
        <Link href={`/${url}`} className="flex flex-col">
            <div
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                className="flex relative"
                style={{ width: "450px", height: "450px" }}
            >
                <Image
                    src={
                        isHovered
                            ? "/Images/nikeBehind.webp"
                            : "/Images/nike.webp"
                    }
                    alt="Nike Something"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all 1s"
                />
            </div>
            <div className="flex flex-col">
                {quantity < 100 && (
                    <span className="text-sm font-bold text-red-800">
                        Low Stock
                    </span>
                )}
                <span className="text-m font-bold">{name}</span>
                <span className="text-m font-bold text-gray-400">
                    {category}
                </span>
                <span className="text-m font-bold">${price}</span>
            </div>
        </Link>
    );
}

export function ProductCardLoader() {
    return (
        <div className="flex flex-col animate-pulse">
            <div
                className="flex relative bg-slate-200 rounded"
                style={{ width: "450px", height: "450px" }}
            ></div>
            <div className="flex flex-col gap-1 mt-2">
                <span className="text-m font-bold text-gray-200 bg-slate-200 rounded-full h-3"></span>
                <span className="text-m font-bold text-gray-200 bg-slate-200 rounded-full h-3 w-2/3"></span>
                <span className="text-m font-bold text-gray-200 bg-slate-200 rounded-full h-3 w-1/4"></span>
            </div>
        </div>
    );
}
