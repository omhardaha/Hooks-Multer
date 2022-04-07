import React from 'react'
import axios from 'axios'
export const Multer = () => {
    const handleClick = async (e) => {
        e.preventDefault();
        const res = await axios.post("/post", {
            name: "multer",
            call: "uploading file"
        })
        console.log(res.data);
    }
    return (
        <>
            <div> Multer </div>
            <form action="submit">
                <input type="file" />
                <button type='submit' onClick={handleClick}>Upload File</button>
            </form>
        </>
    )
}
