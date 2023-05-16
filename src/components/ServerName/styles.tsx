import styled from "styled-components";
/*==>
Pacote relativamente pesado, pode ser que der erros de download por rede.
para corrigir, foi usado "yarn config set network-timeout 600000 -g".
<==*/
import { ExpandMore } from '@styled-icons/material/ExpandMore';


export const Container = styled.div`
    grid-area: SN;
    background-color: var(--secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px 0 16px;

    box-shadow: rgba(0,0,0,.2) 0px 1px 0px 0px;

    z-index: 2;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
    width: 28px;
    height: 28px;

    color: var(--white);
    cursor: pointer;
`;