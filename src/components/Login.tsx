"use client";
import { useState } from "react";
import BackgroundOverlay from "./BackgroundOverlay";
import Link from "next/link";
import Input from "./Input";

interface LoginProps {
    toggler: React.MouseEventHandler;
}

export default function Login({ toggler }: LoginProps) {
    const [loginData, setLoginData] = useState<{
        email: string;
        password: string;
    }>({ email: "", password: "" });

    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [name]: value,
        }));
    };

    console.log(loginData);

    return (
        <>
            <section
                className="absolute w-64 right-5 px-5 py-5 rounded-md bg-white login-open z-20"
                id="signInWindow"
            >
                <div>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap flex-col -mx-3 mb-3">
                            <Input
                                name="email"
                                label="E-Mail"
                                type="e-mail"
                                onChange={handleFormInput}
                            />
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                                onChange={handleFormInput}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Link href={"/"} className="mb-3 mt-0 underline">
                                Register
                            </Link>
                            <button className="bg-white w-fit hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <BackgroundOverlay toggler={toggler} />
        </>
    );
}
