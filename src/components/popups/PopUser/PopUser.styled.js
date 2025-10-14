import styled from "styled-components";

export const HeaderUser = styled.a`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: #565eef;

    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid #565eef;
        border-bottom: 1.9px solid #565eef;
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }

    &:hover {
        color: #33399b;

        &::after {
            border-left-color: #33399b;
            border-bottom-color: #33399b;
        }
    }
`;

export const HeaderPopUserSet = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #fff;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`;

export const PopUserSetName = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`;
export const PopUserSetMail = styled.p`
    color: #94a6be;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    & p {
        color: #000;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.14px;
    }
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    appearance: none;

    &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #94a6be;
        transition: 0.5s;
    }

    &:checked::before {
        left: 12px;
    }
`;

export const ExitButton = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565eef;
    border-radius: 4px;
    border: 1px solid #565eef;

    a {
        color: #565eef;
    }

    &:hover {
        background-color: #33399b;
        color: #ffffff;

        a {
            color: #ffffff;
        }
    }
`;