import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    HeaderUser, HeaderPopUserSet, PopUserSetName, PopUserSetMail, PopUserSetTheme, Checkbox, ExitButton,
} from "./PopUser.styled.js";

import {
    PopExit, PopExitContainer, PopExitBlock, PopExitTtl, PopExitForm, PopExitFormGroup, PopExitBtnYes, PopExitBtnNo,
} from "../../App/App.styled.js";

const UserProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPopExitVisible, setPopExitVisible] = useState(false);
    const navigate = useNavigate();

    const toggleModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(!isModalOpen);
    };

    const handleOpenPopExit = (e) => {
        e.preventDefault();
        console.log("Кнопка выхода нажата");
        setPopExitVisible(true);
    };

    const handleClosePopExit = () => {
        setPopExitVisible(false);
    };

    const handleExit = () => {
        setPopExitVisible(false);

        navigate("/exit");
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isModalOpen && !e.target.closest(".pop-user-set") && !e.target.closest(".header__user")) {
                setIsModalOpen(false);
            }

            if (isPopExitVisible && !e.target.closest(".pop-exit") && !e.target.closest(".exit-button")) {
                setPopExitVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isModalOpen, isPopExitVisible]);

    return (<div>
        <HeaderUser href="#user-set-target" onClick={toggleModal}>
            Ivan Ivanov
        </HeaderUser>

        {isModalOpen && (<HeaderPopUserSet className="pop-user-set" id="user-set-target">
            <PopUserSetName>Ivan Ivanov</PopUserSetName>
            <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
            <PopUserSetTheme>
                <p>Темная тема</p>
                <Checkbox className="checkbox" name="checkbox"/>
            </PopUserSetTheme>
            <ExitButton
                className="exit-button"
                type="button"
                onClick={handleOpenPopExit}
            >
                Выйти
            </ExitButton>
        </HeaderPopUserSet>)}

        {isPopExitVisible && (<PopExit
            className="pop-exit"
            style={{display: isPopExitVisible ? "block" : "none"}}
        >
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </PopExitTtl>
                    <PopExitForm id="formExit" onSubmit={(e) => e.preventDefault()}>
                        <PopExitFormGroup>
                            <PopExitBtnYes
                                id="exitYes"
                                type="button"
                                onClick={handleExit}
                            >
                                Да, выйти
                            </PopExitBtnYes>
                            <PopExitBtnNo
                                id="exitNo"
                                type="button"
                                onClick={handleClosePopExit}
                            >
                                Нет, остаться
                            </PopExitBtnNo>
                        </PopExitFormGroup>
                    </PopExitForm>
                </PopExitBlock>
            </PopExitContainer>
        </PopExit>)}
    </div>);
};

export default UserProfile;