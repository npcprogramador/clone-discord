import styled from "styled-components";


export const Container = styled.div`
    grid-area: UL;
    background-color: var(--secondary);

    display: flex;
    flex-direction: column;

    padding: 3px 6px 0 16px;

    max-height: calc(100vh - 46px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Role = styled.div`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`;

export const User = styled.div`
    margin-top: 5px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;
    border-radius: 4px;
    background: transparent;
    transition: background 0.2s;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    strong {
        margin-left: 13px;
        font-weight: 500;
        color: var(--white);
        opacity: 0.7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    span {
        margin-left: 9px;

        background-color: var(--discord);
        color: var(--white);

        padding: 4px 5px;
        border-radius: 4px;

        text-transform: uppercase;
        font-size: 11px;
        font-weight: bold;
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0;
    width: 32px;
    height: 32px;

    background-color: var(--primary);
    border-radius: 50%;
    position: relative;

    &.bot {
        background-color: var(--mention-detail);
    }

    .online {
        background-color: green;
        width: 10px;
        height: 10px;

        position: absolute;
        left: calc(88% - 5px);
        top: calc(88% - 5px);
        border-radius: 50%;
    }
`;
