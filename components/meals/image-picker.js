'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css'
import Image from 'next/image';
export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef()
    function hadnleImageChange(event) {
        const file = event.target.files[0]
        
        if(!file) {
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    function handlePickClick() {
        imageInput.current.click()
    }
    return <div className={classes.picker}>
        <label htmlFor='image'>{label}</label>

        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt='The image selcted by the user' fill/>}
            </div>
            <input 
            onChange={hadnleImageChange}
            className={classes.input}
            type='file' id={name}
            accept='image/png, image/jpeg' name={name} ref={imageInput}/>
            <button onClick={handlePickClick} className={classes.button} type='button'>Pick an Image</button>
        </div>
    </div>
}