"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MiniCart from "@/components/MiniCart";
import toggleDrawer from "@/app/utils/toggleDrawer";
import Login from "./Login";
import toggleOverlay from "@/app/utils/toggleOverlay";

export default function NavBar() {
    const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const handleToggleMiniCart = () => {
        toggleDrawer(isMiniCartOpen, setIsMiniCartOpen, "minicart");
    };

    const [isSignInWindowOpen, setIsSignInWindowOpen] = useState(false);
    const handleToggleSignInWindow = () => {
        if (isSignInWindowOpen) {
            const signInWindow = document.getElementById("signInWindow");
            signInWindow?.classList.add("login-close");
            toggleOverlay();

            setTimeout(() => {
                setIsSignInWindowOpen((prevState) => !prevState);
            }, 300);
        } else {
            setIsSignInWindowOpen((prevState) => !prevState);
        }
    };

    const [isNavBarAccordionOpen, setIsNavBarAccordionOpen] = useState(false);
    const openNavBarAccordion = () => {
        setIsNavBarAccordionOpen(true);
    };
    const closeNavBarAccordion = () => {
        setIsNavBarAccordionOpen(false);
    };

    return (
        <>
            <nav>
                <div className="py-1 bg-gray-100">
                    <div className="flex justify-end">
                        <ul className="flex list-none gap-4 mr-7">
                            <li>
                                <Link
                                    href={"/shops"}
                                    className="text-sm font-bold"
                                >
                                    Shops
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/shops"}
                                    className="text-sm font-bold"
                                >
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/shops"}
                                    className="text-sm font-bold"
                                >
                                    Subscribe
                                </Link>
                            </li>
                            <li>
                                {isSignedIn ? (
                                    <span className="text-sm font-bold relative">
                                        My Account
                                    </span>
                                ) : (
                                    <span
                                        className={`text-sm font-bold relative ${
                                            isSignInWindowOpen && "z-20"
                                        }`}
                                        onClick={handleToggleSignInWindow}
                                    >
                                        Sign In
                                    </span>
                                )}
                                {isSignInWindowOpen && (
                                    <Login toggler={handleToggleSignInWindow} />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between bg-white px-7">
                    <div className="w-1/3">
                        <Image
                            src="/Images/capital-t-fire-alphabet-letters-icon-design-png.webp"
                            width={50}
                            height={50}
                            alt="logo of tbilad"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/3">
                        <ul className="flex list-none gap-5 text-center ">
                            <li
                                onMouseEnter={openNavBarAccordion}
                                onMouseLeave={closeNavBarAccordion}
                            >
                                <Link href={"/1"} className="font-semibold">
                                    New and Featured
                                </Link>
                            </li>
                            <li>
                                <Link href={"/1"} className="font-semibold">
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link href={"/1"} className="font-semibold">
                                    Women
                                </Link>
                            </li>
                            <li>
                                <Link href={"/1"} className="font-semibold">
                                    Kids
                                </Link>
                            </li>
                            <li>
                                <Link href={"/1"} className="font-semibold">
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-end w-1/3">
                        <div className="w-1/5 mr-3">
                            <input
                                type="search"
                                id="default-search"
                                className="h-10 rounded-full pl-3 bg-gray-100 w-full"
                                placeholder="Search"
                                required
                            />
                        </div>
                        <div className="flex gap-3">
                            <ShoppingBagOutlinedIcon
                                onClick={handleToggleMiniCart}
                            />
                            <FavoriteBorderOutlinedIcon />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className={`w-full absolute top-0 left-0 ${
                            isNavBarAccordionOpen ? "max-h-64" : "max-h-0"
                        } overflow-hidden transition-all duration-500 bg-gray-100`}
                    >
                        <span>Hello</span>
                    </div>
                </div>
                <div className="h-14 w-full bg-gray-100 flex justify-center items-center py-5">
                    <div className="w-fit flex flex-col">
                        <span className="font-medium">New Arrivals</span>
                        <span className="text-center text-sm underline font-bold">
                            <Link href={""}>Shop All</Link>
                        </span>
                    </div>
                </div>
            </nav>
            {isMiniCartOpen && (
                <MiniCart toggleMiniCart={handleToggleMiniCart} />
            )}
        </>
    );
}
