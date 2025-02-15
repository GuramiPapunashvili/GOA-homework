import { useState } from "react";

const useFormHandeling = () => {
    const [info, setInfo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const curInfo = {};

        for (let [key, value] of formData) {
            curInfo[key] = value;
        }
        setInfo(curInfo);
    };

    return [info, handleSubmit];
};

export default useFormHandeling;
