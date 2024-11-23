import { useState } from 'react';
import FullButton from "../components/Button";
import Dropdown from "../components/Dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import options from "../assets/input/options.json";

const InputPersonPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const animalData = location.state;
    const [birthDate, setBirthDate] = useState('');
    const [personName, setPersonName] = useState('');
    const [gender, setGender] = useState('');
    const [solarLunar, setSolarLunar] = useState('');
    const [birthTime, setBirthTime] = useState('');

    const fetchData = () => {
        // api 개발 완료하면 fetchData()로 api 통신하는 로직 변경
        const personData = {
            personName,
            birthDate,
            gender,
            solarLunar,
            birthTime
        }

        const requestPayload = {
            animalData,
            personData
        }

        console.log(requestPayload);
        const fetchedData = {
            report_id: "1234567890",
            pages_info: [
                { "page_index": "1", "title": "나의 평소 성격", "info": "송수인님의 경우 평소에는 활발하고 사교적인 편이겠네요." },
                { "page_index": "2", "title": "나의 숨겨진 본성", "info": "송수인님의 경우 평소 성격과 본성에 " },
                { "page_index": "3", "title": "share", "info": "share" }
            ]
        };

        return fetchedData;
    };

    const handleClick = () => {
        const fetchedData = fetchData();
        navigate(`/report/${fetchedData.report_id}/${fetchedData.pages_info[0].page_index}`, {
            state: fetchedData
        });
    };

    const handleChange = (e) => {
        setBirthDate(e.target.value);
    };

    const handleNameChange = (e) => {
        setPersonName(e.target.value);
    };

    const handleGenderSelect = (value) => {
        setGender(value);
    };

    const handleSolarLunarSelect = (value) => {
        setSolarLunar(value);
    };

    const handleBirthTimeSelect = (value) => {
        setBirthTime(value);
    };

    // 모든 필수 입력값이 채워졌는지 확인
    const isFormValid = birthDate && personName && gender && solarLunar && birthTime;

    return (
        <>
            <div className="tempStatement">내 사주 정보</div>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="basic-info">
                    <Dropdown id="gender" placeholder="성별" options={options.gender} onClickDropdown={handleGenderSelect} />
                    <input id="name" value={personName} onChange={handleNameChange} placeholder="이름" />
                </div>
                <div className="birth-date">
                    <Dropdown id="solar-lunar" placeholder="양/음력" options={options.solar_lunar} onClickDropdown={handleSolarLunarSelect} />
                    <input id="birth-date" value={birthDate} onChange={handleChange} placeholder="YYYY/MM/DD" />
                </div>
                <div className="birth-time">
                    <Dropdown placeholder="생시" options={options.birth_time} onClickDropdown={handleBirthTimeSelect} />
                </div>
            </form>
            <div className="button-container">
                <FullButton displayMessage="사주 보러가기" onClick={handleClick} disabled={!isFormValid} />
            </div>
        </>
    );
};

export default InputPersonPage;