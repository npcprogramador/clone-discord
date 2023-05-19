import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 4px 16px;
    margin-right: 4px;

    background-color: transparent;
    transition: background-color 0.3s;

    &.mention {
        background-color: var(--mention-message);

        border-left: solid 2px var(--mention-detail);
        padding-left: 14px;
    }
    & + div {
        margin-top: 13px;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--secondary);
    

    &.bot {
        background-color: var(--mention-detail);
    }
`;

export const Mensage = styled.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 17px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    strong {
        color: var(--white);
        font-size: 16px;
    }
    span {
        margin-left: 6px;

        background-color: var(--discord);
        color: var(--white);

        padding: 4px 5px;
        border-radius: 4px;

        text-transform: uppercase;
        font-size: 11px;
        font-weight: bold;
    }

    time {
        margin-left: 6px;
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Content = styled.div`
    text-align: left;
    font-size: 16px;
    color: var(--white);
`;

