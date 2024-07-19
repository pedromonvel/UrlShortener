"use client";

import { useState } from "react";

const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = onValidate(form);

        if(err === null) {
            console.log("Enviando Formulario...");
        } else {
            setErrors(err);
        }

        
    }

    return {form, errors, handleChange, handleSubmit}
}

export default useForm