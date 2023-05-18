import styled from "styled-components";
import { Mic } from "@styled-icons/material/Mic";
import { Headset } from "@styled-icons/material/Headset";
import { Settings } from "@styled-icons/material/Settings";


export const Container = styled.div`
    grid-area: UI;
    background-color: var(--quaternary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--gray);
`;

export const UserData = styled.div`
    margin-left: 8px;

    display: flex;
    flex-direction: column;
    
    strong {
        font-size: 13px;
        color: var(--white);
        display: block;
    }

    span {
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;

    svg:not(:fist-child) { //seleciona os icones menos o primeiro
        margin-left: 7px;
    }

    svg {
        opacity: 0.7;
        transition: opacity 0.3s;
        color: var(--white);
    }
    svg:hover {
        opacity: 1;
    }
`;

export const MicIcon = styled(Mic)`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;

export const HeadPhoneIcon = styled(Headset)`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;

export const SettingsIcon = styled(Settings)`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;