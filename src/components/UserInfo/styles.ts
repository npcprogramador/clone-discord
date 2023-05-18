import styled from "styled-components";
import { Microphone } from "@styled-icons/boxicons-solid/Microphone";
import { Headphones } from "@styled-icons/bootstrap/Headphones";
import { Settings } from "@styled-icons/material/Settings";


export const Container = styled.div`
    grid-area: UI;
    background-color: var(--quaternary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 10px 15px 10px;
`;


export const Profile = styled.div``;

export const Avatar = styled.div``;

export const UserData = styled.div``;

export const Icons = styled.div`
    display: flex;
    align-items: center;
`;

export const MicIcon = styled(Microphone)`
    height: 20px;
    width: 20px;
    color: var(--symbol);
    margin: 3.5px;
`;

export const HeadPhoneIcon = styled(Headphones)`
    height: 20px;
    width: 20px;
    color: var(--symbol);
    margin: 3.5px;
`;

export const SettingsIcon = styled(Settings)`
    height: 20px;
    width: 20px;
    color: var(--symbol);
    margin: 3.5px;
`;