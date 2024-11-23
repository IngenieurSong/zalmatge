import { useState, useEffect } from 'react'
import FullButton from "../components/Button"
import { useNavigate } from "react-router-dom"

import "../App.css";
import dog_logo from "../assets/start/dog_logo.png"

const StartPage = () => {
    const navigate = useNavigate();

    const dogNames = ["라떼", "모찌", "뭉이", "탄이", "초코"]
    const [dogName, setDogName] = useState(dogNames[0]);
    const [nameIndex, setNameIndex] = useState(0);
    const [slide, setSlide] = useState(true);

    const handleClick = () => {
        navigate("/input");
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlide(false);
            setTimeout(() => {
                setNameIndex((prevIndex) => (prevIndex + 1) % dogNames.length);
                setDogName(dogNames[nameIndex]);
                setSlide(true);
            }, 1000);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [nameIndex]);

    return (
        <>
            <div className="logo-main">
                <div className="title-statement">
                    나와 우리 <span className={`dog-name ${slide ? 'slide-in' : 'slide-out'}`}>{dogName}</span>는 얼마나 잘 맞을까?
                </div>
                <img className="logo-img" src={dog_logo}></img>
            </div>
            <div className="button-container">
                <FullButton displayMessage={"시작하기"} onClick={handleClick}/>
            </div>
        </>
    )
}

export default StartPage;