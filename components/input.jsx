"use client";

import React from "react"
import "./input.css"
import Button from "./button"
import useForm from "../hooks/useForm"
import UrlShortedSection from "./url-shorted";



const InputSection = () => {

    const initialData = {
        url: ''
    }

    const onValidate = (form) => {
        let errors = {};

        let regexUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

        if (!form.url.trim()) {
            errors.url = 'This input must not be empty.';
        } else if (!regexUrl.test(form.url)) {
            errors.url = 'Invalid URL, change it and try submitting it again.';
        } 

        return errors
    }

    const {form, errors, isUrlShortedVisible, shortenedUrl, handleChange, handleSubmit} = useForm(initialData, onValidate)

    return (
        <>
            <form className="inputWithButton" onSubmit={handleSubmit}>
                
                <input type="text" placeholder={"Enter the link here..."} name="url" value={form.url} onChange={handleChange}/>
                {errors.url && <div className="alert"><span className="alert-message">Alert! </span>{errors.url}</div>}

                <Button 
                className="input-button"
                text="Shorten it"
                />
            </form>

            {isUrlShortedVisible && <UrlShortedSection shortenedUrl={shortenedUrl}/>}
        </>
    )
}

export default InputSection