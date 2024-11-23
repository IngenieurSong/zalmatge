import { useState, useEffect } from 'react';
import FullButton from "../components/Button";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import "../App.css";
import options from "../assets/input/options.json";

const InputPage = () => {
    const navigate = useNavigate();
    const [birthDate, setBirthDate] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [selectedAnimal, setSelectedAnimal] = useState('');
    const [selectedAnimalType, setSelectedAnimalType] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCalendar, setSelectedCalendar] = useState('');
    const [selectedBirthTime, setSelectedBirthTime] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        // 모든 필드가 입력되었는지 확인하여 유효성 검사
        setIsFormValid(
            birthDate && animalName && selectedAnimal && selectedAnimalType &&
            selectedGender && selectedCalendar && selectedBirthTime
        );
    }, [birthDate, animalName, selectedAnimal, selectedAnimalType, selectedGender, selectedCalendar, selectedBirthTime]);

    const handleClick = () => {
        const formData = {
            animalName,
            birthDate,
            selectedAnimal,
            selectedAnimalType,
            selectedGender,
            selectedCalendar,
            selectedBirthTime,
        };
        navigate(`/input/person`, { state: formData });
    };

    const handleChange = (e) => {
        setBirthDate(e.target.value);
    };

    const handleNameChange = (e) => {
        setAnimalName(e.target.value);
    };

    return (
        <>
            <div className="tempStatement">반려동물 정보</div>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="animals-and-type">
                    <Dropdown
                        id={"animals"}
                        placeholder={"종"}
                        options={options.animals}
                        onClickDropdown={(value) => setSelectedAnimal(value)}
                    />
                    <Dropdown
                        id={"animals-type"}
                        placeholder={"세부 종"}
                        options={options.dog_type}
                        onClickDropdown={(value) => setSelectedAnimalType(value)}
                    />
                </div>
                <div className="basic-info">
                    <Dropdown
                        id={"gender"}
                        placeholder={"성별"}
                        options={options.gender}
                        onClickDropdown={(value) => setSelectedGender(value)}
                    />
                    <input
                        id="name"
                        value={animalName}
                        onChange={handleNameChange}
                        placeholder="이름"
                    />
                </div>
                <div className="birth-date">
                    <Dropdown
                        id={"solar-lunar"}
                        placeholder={"양/음력"}
                        options={options.solar_lunar}
                        onClickDropdown={(value) => setSelectedCalendar(value)}
                    />
                    <input
                        id="birth-date"
                        value={birthDate}
                        onChange={handleChange}
                        placeholder="YYYYMMDD"
                    />
                </div>
                <div className="birth-time">
                    <Dropdown
                        placeholder={"생시"}
                        options={options.birth_time}
                        onClickDropdown={(value) => setSelectedBirthTime(value)}
                    />
                </div>
            </form>
            <div className="button-container">
                <FullButton displayMessage={"다음"} onClick={handleClick} disabled={!isFormValid} />
            </div>
        </>
    );
};

export default InputPage;