import React, { useState } from 'react'
import axios from 'axios'
export const Multer = () => {
    const [file, setFile] = useState()
    const [image, setImage] = useState()
    const handleClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("avatar", file);
        const res = await axios.post("/post", formData)
        console.log(res.data);
        setImage(res.data)
    }
    return (
        <>
            <div> Multer </div>
            <form action="submit">
                <input type="file" onChange={e => setFile(e.target.files[0])} />
                <button type='submit' onClick={handleClick}>Upload File</button>
            </form>
            <h1>Uploaded File below </h1>
            <img src={image} alt="" />
        </>
    )
}
