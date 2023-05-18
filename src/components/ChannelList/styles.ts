import styled from "styled-components";
import { Add } from "@styled-icons/material/Add";


export const Container = styled.div`
    grid-area: CL;
    background-color: var(--secondary);

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0px 16px;
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;

    span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--symbol);
    cursor: pointer;
`;
