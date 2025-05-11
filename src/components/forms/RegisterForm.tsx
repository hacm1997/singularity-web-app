"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
    registerUserFormModel,
    registerUserSchema,
} from "./register-from.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useTypeDocument } from "@/libs/hooks/use-type-document/use-type-document";
import { useCountry } from "@/libs/hooks/use-country/use-country";
import { z } from 'zod';
import { useRegisterUserMutation } from "@/libs/shared/api/requests/react-query";
import { gqlClient } from "@/libs/shared/api/client/interceptor";

export const RegisterForm = () => {
    const { typesDocuments } = useTypeDocument();
    const { countries } = useCountry();
    const createUser = useRegisterUserMutation(gqlClient);
    const [loading, setLoading] = useState(false);
    const [docType, setDocType] = useState(1)
    const [selectCountry, setSelectCountry] = useState(1)
    const methods = useForm<registerUserFormModel>({
        mode: "all",
        resolver: zodResolver(registerUserSchema),
    });
    const {
        formState: { isValid, errors },
        watch,
        handleSubmit,
    } = methods;

    const createNewTransaction = async (values: z.infer<typeof registerUserSchema>) => {
        setLoading(true)
        try {
            await createUser.mutateAsync({
                input: {
                    email: values.email,
                    username: values.username,
                    password: values.confirmPassword,
                    Name: values.Name,
                    LastName: values.LastName,
                    IsMilitar: values.IsMilitar,
                    isTemporal: values.isTemporal,
                    document: {
                        TypeDocumentID: docType,
                        Document: values.Document,
                        PlaceExpedition: values.PlaceExpedition,
                        DateExpedition: values.DateExpedition
                    },
                    contact: {
                        CountryID: selectCountry,
                        City: values.City ?? '',
                        Address: values.Address ?? '',
                        Phone: values.Phone ?? '',
                        CelPhone: values.CelPhone ?? '',
                        EmergencyName: values.EmergencyName ?? '',
                        EmergencyPhone: values.EmergencyPhone ?? ''
                    }
                }
            });
            alert('New user created success!');
            window.location.reload()
        } catch (error) {
            setLoading(false);
            alert('Can not create the user, try again!');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(createNewTransaction)} className="max-w-md mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            {...methods.register('email')}
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => (
                                <span
                                    style={{
                                        color: "#F87171",
                                        fontSize: "12px",
                                        marginTop: "0px",
                                    }}
                                >
                                    {message}
                                </span>
                            )}
                        />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            {...methods.register('password')}
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {!errors.password && watch("password")?.length >= 8 && (
                            <span
                                style={{ color: "#65A30D", fontSize: "12px", marginTop: "5px" }}
                            >
                                Valid password
                            </span>
                        )}
                        {errors.password && watch("password")?.length >= 8 ? (
                            <span
                                style={{ color: "#F87171", fontSize: "12px", marginTop: "5px" }}
                            >
                                Invalid password
                            </span>
                        ) : (
                            <>
                                <ErrorMessage
                                    errors={errors}
                                    name="password"
                                    render={({ message }) => (
                                        <span
                                            style={{
                                                color: "#F87171",
                                                fontSize: "12px",
                                                marginTop: "0px",
                                            }}
                                        >
                                            {message}
                                        </span>
                                    )}
                                />
                            </>
                        )}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            {...methods.register('confirmPassword')}
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Confirm password
                        </label>
                        <ErrorMessage
                            errors={errors}
                            name="confirmPassword"
                            render={({ message }) => (
                                <span
                                    style={{
                                        color: "#F87171",
                                        fontSize: "12px",
                                        marginTop: "0px",
                                    }}
                                >
                                    {message}
                                </span>
                            )}
                        />
                        {!errors.confirmPassword &&
                            password &&
                            confirmPassword &&
                            password === confirmPassword && (
                                <span
                                    style={{
                                        color: "#65A30D",
                                        fontSize: "12px",
                                        marginTop: "5px",
                                    }}
                                >
                                    Passwords match
                                </span>
                            )}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            {...methods.register('username')}
                            id="floating_user_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_user_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            User name
                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                {...methods.register('Name')}
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                {...methods.register('LastName')}
                                id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Last name
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <label>Is Militar?</label>
                            <input type="checkbox" {...methods.register("IsMilitar")} />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label>is Temporal?</label>
                            <input type="checkbox" {...methods.register("isTemporal")} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <label>Document Type</label>
                            <select className="bg-black text-white" onChange={(e) => setDocType(Number(e.target.value))}>
                                {typesDocuments && typesDocuments.length > 0 && typesDocuments.map(item => (
                                    <option value={item.id} key={item.id}>{item.NameTypeDocument}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                {...methods.register("Document")}
                                id="floating_document"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_document"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Number document
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                {...methods.register("PlaceExpedition")}
                                id="floating_place_expedition"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_place_expedition"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Expedition Place
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                {...methods.register("DateExpedition")}
                                id="floating_date_expedition"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_date_expedition"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Date Expedition
                            </label>
                        </div>

                    </div>

                    <hr />
                    <h2 className="font-bold text-xl pt-4">Contact Data</h2>
                    <div className="grid md:grid-cols-2 md:gap-6 pt-4">
                        <div className="relative z-0 w-full mb-5 group">
                            <label>Country</label><br />
                            <select className="bg-black text-white" onChange={(e) => setSelectCountry(Number(e.target.value))}>
                                {countries && countries.length > 0 && countries.map(item => (
                                    <option value={item.id} key={item.id}>{`(${item.CountryCode}) ${item.CountryName}`}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                {...methods.register("City")}
                                id="floating_city"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_city"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                City
                            </label>
                        </div>

                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            {...methods.register("Address")}
                            id="floating_address"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_address"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Address
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                {...methods.register("Phone")}
                                id="floating_phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                {...methods.register("CelPhone")}
                                id="floating_cel_phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_cel_phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Cell Phone
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                {...methods.register("EmergencyName")}
                                id="floating_contact_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_contact_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Emergency contact name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                {...methods.register("EmergencyPhone")}
                                id="floating_contact_phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_contact_phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Emergency contact phone
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end">

                        {loading ?
                            <button
                                disabled={true}
                                type="submit"
                                className={`text-white bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center `}
                            >
                                Loading...
                            </button>
                            :
                            <button
                                disabled={!isValid}
                                type="submit"
                                className={`text-white ${isValid ? 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'bg-gray-600'}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center `}
                            >
                                Submit
                            </button>
                        }
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};
