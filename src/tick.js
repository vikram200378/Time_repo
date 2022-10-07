import React, { useState, useEffect } from "react";

const Imgaes = [
    'https://i.pinimg.com/originals/92/15/e5/9215e5d6fe89a4d4fa044529b8b1161d.jpg',
    'https://wallpaper.dog/large/17157040.jpg'
]
function Tick() {

    const [ImagesState, setImagesState] = useState([]);
    const Date1 = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
    // let imgArr = [
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    // ]
    // let length = imgArr.length;
    // let rndIndx = Math.floor(Math.random()*length);

    // let imgArr2 = [
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    //     'img1',
    // ]
    // let length2 = imgArr.length;
    // let rndIndx2 = Math.floor(Math.random()*length);

    useEffect(() => {
        if (Date1 == "06:00 PM") {
            setImagesState(1)
            console.log("if")

        } else {
            setImagesState(0) // rndIndx
            console.log("esle")
        }
    }, [])
    return (

        <>
            <div className="clock">

                <h2>{new Date().toLocaleTimeString()}</h2>

            </div>
            <div className="imagespostion">
                <img src={Imgaes[ImagesState]} />
            </div>
        </>

    )

}
// setInterval(Tick, 1000)
export default Tick;
