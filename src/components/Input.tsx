interface InputProps {
    name: string;
    label: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    options?: { value: string; label: string }[];
}

export default function Input({
    name,
    label,
    type,
    onChange,
    options,
}: InputProps) {
    if (type === "select") {
        return (
            <div className="w-full px-3 mb-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    {label}
                </label>
                <select className="block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                    {options?.map((option, index) => {
                        return (
                            <option value={option.value} key={index}>
                                {option.label}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }

    return (
        <div className="w-full px-3 mb-5">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
            </label>
            <input
                name={name}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type={type}
                placeholder={label}
                onChange={onChange}
            />
            {/* <p className="text-red-500 text-xs italic">
        Please fill out this field.
    </p> */}
        </div>
    );
}
