import styled from "styled-components";

import { Hashtag } from "@styled-icons/heroicons-outline/Hashtag";
import { PersonAdd } from "@styled-icons/evaicons-solid/PersonAdd";
import { Settings2Outline } from "@styled-icons/evaicons-outline/Settings2Outline";


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

export const InviteIcon = styled(PersonAdd)`
    height: 24px;
    width: 24px;
    color: var(--white);
`;

export const SettingsIcon = styled(Settings2Outline)`
    height: 24px;
    width: 24px;
    color: var(--white);
`;

