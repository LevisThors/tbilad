"use client";

import Input from "@/components/Input";

export default function RegistrationPage() {
    const handleFormInput = () => {};
    return (
        <section className="flex w-full justify-center mt-10">
            <div className="w-2/3 flex justify-center">
                <div className="w-1/2 flex-col justify-center text-center">
                    <h1 className="text-2xl font-semibold mb-5">
                        Sign up with
                    </h1>
                    <div className="flex flex-col gap-2 items-center">
                        <button className="bg-white w-1/2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Google
                        </button>
                        <button className="bg-white w-1/2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Feisburk
                        </button>
                    </div>
                </div>

                <div className="w-1/2">
                    <form className="w-full max-w-lg">
                        <Input
                            name="firstName"
                            label="First Name"
                            type="text"
                            onChange={handleFormInput}
                        />
                        <Input
                            name="lastName"
                            label="Last Name"
                            type="text"
                            onChange={handleFormInput}
                        />
                        <Input
                            name="displayName"
                            label="Display Name"
                            type="text"
                            onChange={handleFormInput}
                        />
                        <Input
                            name="email"
                            label="E-Mail"
                            type="email"
                            onChange={handleFormInput}
                        />
                        <Input
                            name="location"
                            label="Location"
                            type="text"
                            onChange={handleFormInput}
                        />
                        <Input
                            name="password"
                            label="Password"
                            type="password"
                            onChange={handleFormInput}
                        />
                        <Input
                            name="confirmPassowrd"
                            label="Confirm Password"
                            type="password"
                            onChange={handleFormInput}
                        />
                        <button className="bg-gray-800 text-white ms-3 w-1/2 hover:bg-gray-700  font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
