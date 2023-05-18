import styled from "styled-components";
//styled-icons
import { Hashtag } from "@styled-icons/heroicons-outline/Hashtag";
import { Settings } from "@styled-icons/material/Settings";
import { PersonAdd } from "@styled-icons/material/PersonAdd";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    div {
        display: flex;
        align-items: center;
    }

    div span {
        color: var(--senary);
        margin-left: 5px;
    }

    &.active,
    &:hover {
        background-color: var(--quinary);

        div span  {
            color: var(--white);
        }
    }
`;

export const HashtagIcon = styled(Hashtag)`
    height: 20px;
    width: 20px;
    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    height: 16px;
    width: 16px;
    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    height: 16px;
    width: 16px;

    margin-left: 4px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

