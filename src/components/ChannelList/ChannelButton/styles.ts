import styled from "styled-components";

import { Hashtag } from "@styled-icons/heroicons-outline/Hashtag";
import { User } from "@styled-icons/boxicons-solid/User";
import { Settings } from "@styled-icons/feather/Settings";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HashtagIcon = styled(Hashtag)`
    height: 24px;
    width: 24px;
    color: var(--white);
`;

export const InviteIcon = styled(User)`
    height: 24px;
    width: 24px;
    color: var(--white);
    cursor: pointer;
`;

export const SettingsIcon = styled(Settings)`
    height: 24px;
    width: 24px;
    color: var(--white);
    cursor: pointer;
`;

