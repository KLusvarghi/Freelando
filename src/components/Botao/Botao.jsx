import styled from '@emotion/styled/macro';
import React from 'react';

const IconeLupa = styled.img`
  margin: auto;
`;

const BotaoPrimario = styled.button`
  background: transparent;
  color: ${(props) => props.theme.cores.primarias.b};
  border-radius: ${(props) => props.theme.espacamentos.s};
  border: 2px solid ${(props) => props.theme.cores.primarias.b};
  padding: ${(props) => props.theme.espacamentos.xs}    ${(props) => props.theme.espacamentos.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  &:hover {
    color: ${(props) => props.theme.cores.dark.b};
    border-color: ${(props) => props.theme.cores.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.cores.focus};
  }
`;

const BotaoSecundario = styled.button`
  background: ${(props) => props.theme.cores.primarias.b};
  color: ${(props) => props.theme.cores.branco};
  border-radius: ${(props) => props.theme.espacamentos.s};
  padding: ${(props) => props.theme.espacamentos.xs}    ${(props) => props.theme.espacamentos.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: none;
  display: inline-flex;
  gap: 8px;
  &:hover {
    background: ${(props) => props.theme.cores.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.cores.dark.d};
  }
`;

export const Botao = ({ children, variante = 'primaria' }) => {
  if (variante === 'primaria') {
    return (
      <BotaoPrimario>
        <IconeLupa src="./icons/arrow_back.svg" />
        {children}
      </BotaoPrimario>
    );
  }
  return (
    <BotaoSecundario>
      {children}
      <IconeLupa src="./icons/login.svg" />
    </BotaoSecundario>
  );
};
