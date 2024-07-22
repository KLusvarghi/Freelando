import styled from '@emotion/styled/macro';
import React from 'react';

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.cores.neutras.a};
`;
const InputEstilizada = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-top: ${(props) => props.theme.espacamentos.xs};
  margin-bottom: ${(props) => props.theme.espacamentos.s};
  padding-left: ${(props) => props.theme.espacamentos.s};
  height: 40px;
  color: ${(props) => props.theme.cores.neutras.a};
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

export const CampoTexto = ({ titulo }) => {
  return (
    <LabelEstilizada>
      {titulo}
      <InputEstilizada type="text" />
    </LabelEstilizada>
  );
};
