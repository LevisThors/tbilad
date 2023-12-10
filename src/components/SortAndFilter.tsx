"use client";
import { useState } from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import toggleDrawer from "@/app/utils/toggleDrawer";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Drawer from "./Drawer";

export default function SortAndFilter() {
    const [isSortAndFilterOpen, setIsSortAndFilterOpen] = useState(false);
    const [filters, setFilters] = useState<{ price: string[]; size: string[] }>(
        {
            price: [],
            size: [],
        }
    );

    const toggleSortAndFilter = () => {
        toggleDrawer(
            isSortAndFilterOpen,
            setIsSortAndFilterOpen,
            "sortandfilter"
        );
    };

    const applyFilters = () => {
        const query = `?price=${filters.price}&size=${filters.size.join(",")}`;
    };

    const removeFilters = () => {
        setFilters({ price: [], size: [] });
    };

    return (
        <>
            <div className="flex justify-end w-full">
                <div className="flex gap-4">
                    <span
                        className="text-sm flex gap-2 font-bold cursor-pointer border border-black px-3 py-2 items-center"
                        onClick={toggleSortAndFilter}
                    >
                        Sort & Filter
                        <TuneOutlinedIcon />
                    </span>
                </div>
            </div>
            {isSortAndFilterOpen && (
                <>
                    <Drawer id="sortandfilter" toggler={toggleSortAndFilter}>
                        <div>
                            <h1 className="text-start font-bold text-3xl mb-7">
                                Filters
                            </h1>
                            <div className="w-full flex justify-center flex-col">
                                <CollapsibleFilter
                                    label="Shop by price"
                                    filters={{ something: "$50-$140" }}
                                    type="checkbox"
                                    selectedFilters={filters.price}
                                    onFilterChange={(value) =>
                                        setFilters({ ...filters, price: value })
                                    }
                                />

                                <CollapsibleFilter
                                    label="Size"
                                    filters={{
                                        size1: "36 EU",
                                        size2: "37 EU",
                                        size3: "38 EU",
                                    }}
                                    type="checkbox"
                                    selectedFilters={filters.size}
                                    onFilterChange={(value) =>
                                        setFilters({ ...filters, size: value })
                                    }
                                />
                                <div className="w-full flex flex-col justify-center items-center">
                                    <button
                                        onClick={applyFilters}
                                        className="bg-white w-fit hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                    >
                                        Apply Filters
                                    </button>
                                    <span
                                        className="underline text-sm mt-2 cursor-pointer"
                                        onClick={removeFilters}
                                    >
                                        Remove Filters
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 px-5"></div>
                        </div>
                    </Drawer>
                    <div
                        className="z-10 absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/20 overscroll-none"
                        onClick={toggleSortAndFilter}
                    ></div>
                </>
            )}
        </>
    );
}

interface CollapsibleFilterProps {
    label: string;
    filters: { [key: string]: string };
    type: string;
    selectedFilters: string[];
    onFilterChange: (value: string[]) => void;
}

function CollapsibleFilter({
    filters,
    label,
    type,
    selectedFilters,
    onFilterChange,
}: CollapsibleFilterProps) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsibleFilter = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    const handleFilterSelection = (filterValue: string) => {
        const updatedFilters = [...selectedFilters];
        const filterIndex = updatedFilters.indexOf(filterValue);

        if (filterIndex === -1) {
            updatedFilters.push(filterValue);
        } else {
            updatedFilters.splice(filterIndex, 1);
        }

        onFilterChange(updatedFilters);
    };

    return (
        <div className="flex flex-col w-full">
            <div
                className="w-full flex justify-between items-center py-3 border-t border-gray-300 cursor-pointer"
                onClick={toggleCollapsibleFilter}
            >
                <span className="text-lg font-semibold w-full flex justify-between align-middle">
                    <span>{label}</span>
                    <span>
                        {isCollapsed ? (
                            <RemoveRoundedIcon />
                        ) : (
                            <AddRoundedIcon />
                        )}
                    </span>
                </span>
            </div>

            <div
                className={`pt-0 mt-1 overflow-hidden h-fit transition-[max-height] duration-300  ease-in ${
                    isCollapsed ? "max-h-64" : "max-h-0"
                }`}
            >
                <ul className="list-none w-full m-0 mb-4">
                    {Object.keys(filters).map((filterAttr, i) => (
                        <li
                            key={i}
                            className="font-medium text-base flex items-center w-full"
                        >
                            {type === "checkbox" && (
                                <input
                                    type="checkbox"
                                    className="bg-gray-100 color-blue-600 w-4 h-4 me-1"
                                    checked={selectedFilters.includes(
                                        filters[filterAttr]
                                    )}
                                    onChange={() =>
                                        handleFilterSelection(
                                            filters[filterAttr]
                                        )
                                    }
                                />
                            )}
                            {filters[filterAttr]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
