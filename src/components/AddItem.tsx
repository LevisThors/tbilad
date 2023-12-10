"use client";
import { useState } from "react";
import Input from "./Input";

export default function AddItem() {
    const [inputData, setInputData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputData((prevState) => {
            return { ...prevState, [name]: value };
        });
    };
    console.log(inputData);
    return (
        <div>
            <form>
                <Input
                    name="title"
                    label="Title"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="category"
                    label="Category"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="brand"
                    label="Brand"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="size"
                    label="Size"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="color"
                    label="Color"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="condition"
                    label="Condition"
                    type="select"
                    onChange={handleChange}
                    options={[
                        { value: "", label: "New" },
                        { value: "", label: "Second Hand" },
                        { value: "", label: "Well Worn" },
                    ]}
                />
                <Input
                    name="description"
                    label="Description"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="price"
                    label="Price"
                    type="number"
                    onChange={handleChange}
                />
                <Input
                    name="photos"
                    label="Photos"
                    type="file"
                    onChange={handleChange}
                />
                <Input
                    name="location"
                    label="Location"
                    type="text"
                    onChange={handleChange}
                />
                <Input
                    name="contact"
                    label="Contact"
                    type="text"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
