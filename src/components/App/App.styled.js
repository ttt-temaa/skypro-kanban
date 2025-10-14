import styled from "styled-components";

export const AppLoadingMessage = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 20px;
    color: #333;
`;

export const AppWrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
`;

export const PopExit = styled.div`

    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: fixed; /* Используем fixed, чтобы окно было поверх других элементов */
    top: 0;
    left: 0;
    z-index: 9999; /* Увеличиваем z-index для попапа */
    background: rgba(0, 0, 0, 0.5); /* Затемнение фона */
    display: ${({isVisible}) => (isVisible ? 'block' : 'none')}; /* Условное отображение */

`;

export const PopExitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 16px; /* Если вам нужно добавить немного отступов по бокам */
`;

export const PopExitBlock = styled.div`
    background-color: #ffffff;
    max-width: 370px; /* Ограничиваем максимальную ширину */
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopExitTtl = styled.div`
    margin-bottom: 20px;

    &h2 {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: -0.4px;
    }
`;

export const PopExitForm = styled.form``;

export const PopExitFormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const PopExitBtnYes = styled.button`
    width: 153px;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;
    margin-right: 10px;

    a {
        width: 100%;
        height: 100%;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        background-color: #33399b;
    }
`;
export const PopExitBtnNo = styled.button`
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #565eef;

    a {
        width: 100%;
        height: 100%;
        color: #565eef;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        background-color: #33399b;
        color: #ffffff;
    }

    &:hover a {
        color: #ffffff;
    }
`;

export const Main = styled.main`
    width: 100%;
    background-color: #eaeef6;
`;
export const MainContainer = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`;
export const MainBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
`;
export const MainContent = styled.div`
    width: 100%;
    display: flex;
`;