"use client";

import { useState } from "react";

const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [isUrlShortedVisible, setUrlShortedVisible] = useState(false)
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = onValidate(form);
        setErrors(err);

        if (Object.keys(err).length === 0){
            console.log("Enviando Formulario...");
            setShortenedUrl("https://urlshrt.co/jRi9d");
            setUrlShortedVisible(true)
        } else {
            setUrlShortedVisible(false)
        }
    }

    return {form, errors, isUrlShortedVisible, shortenedUrl, handleChange, handleSubmit}
}

export default useForm