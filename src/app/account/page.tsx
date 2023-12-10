"use client";

import { useState, useEffect } from "react";
import AddItem from "@/components/AddItem";

interface optionProps {
    [key: string]: React.ReactNode;
}

const options: optionProps = {
    My_Account: <Test />,
    Add_Item: <AddItem />,
};

export default function Account() {
    const [activeLink, setActiveLink] = useState<string>(() => {
        return localStorage.getItem("activeLink") || "My_Account";
    });
    const [activeLinkTitle, setActiveLinkTitle] = useState<string>(() => {
        return activeLink.split("_").join(" ");
    });

    useEffect(() => {
        localStorage.setItem("activeLink", activeLink);
    }, [activeLink]);

    const handleClick = (option: string) => {
        const title = option.split("_").join(" ");
        setActiveLink(option);
        setActiveLinkTitle(title);
    };

    return (
        <section className="flex mt-3">
            <nav className=" w-2/12">
                <ul className="list-none p-5 flex flex-col gap-2 font-semibold text-lg bg-gray-100">
                    {Object.keys(options).map((option, index) => {
                        const title = option.split("_").join(" ");

                        return (
                            <li
                                className={`py-3 px-2 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer ${
                                    activeLink === option && "bg-gray-200"
                                }`}
                                onClick={() => handleClick(option)}
                                key={index}
                            >
                                {title}
                            </li>
                        );
                    })}

                    <li className="py-3 px-2 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer">
                        Top Up
                    </li>
                    <li className="py-3 px-2 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer">
                        Log Out
                    </li>
                </ul>
            </nav>
            <div className="flex flex-col w-full px-10 box-border">
                <div className="py-2 border-b border-black w-full">
                    <h1 className="text-2xl font-semibold">
                        {activeLinkTitle}
                    </h1>
                </div>
                <div>{options[activeLink]}</div>
            </div>
        </section>
    );
}

function Test() {
    return <>Test</>;
}
