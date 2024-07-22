import styled from '@emotion/styled/macro';
import React, { useState } from 'react';
import { ItemListaSuspensaEstilizado } from './ItemListaSuspensaEstilizado';
import { ListaSuspensaEstilizada } from './ListaSuspensaEstilizada';
import { Less } from '../Icones/Less';
import { Expand } from '../Icones/Expand';

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  box-sizing: border-box;
  position: relative;
`;

const BotaolEstilizada = styled.button`
  width: 100%;
  display: block;
  height: 40px;
  font-size: 18px;
  border-radius: ${(props) => props.theme.espacamentos.s};
  border-bottom-left-radius: ${(props) => (props.isOpen ? '0' : '16px')};
  border-bottom-right-radius: ${(props) => (props.isOpen ? '0' : '16px')};
  line-height: 17px;
  font-weight: 400;
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  background: ${(props) => props.theme.cores.branco};
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  outline: none;
  align-items: center;
  padding: ${(props) => props.theme.espacamentos.s};
  margin-top: ${(props) => props.theme.espacamentos.xs};
`;

export const ListaSuspensa = ({ titulo, opcoes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opcaoFocada, setOpcaoFocada] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const manipularTeclaTeclado = (e) => {
    setIsOpen(true);
    console.log(e.key);
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (focoAntigo == null) {
            return 0;
          }
          return (focoAntigo += 1);
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (!focoAntigo) {
            return 0;
          }
          return (focoAntigo -= 1);
        });
        break;
      case 'Enter':
        e.preventDefault();
        setOpcaoFocada(null);
        setIsOpen(false);
        setOpcaoSelecionada(opcoes[opcaoFocada]);
        break;
      default:
        break;
    }
  };
  return (
    <LabelEstilizada>
      {titulo}
      <BotaolEstilizada
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => manipularTeclaTeclado(e)}
      >
        <div>{opcaoSelecionada ? opcaoSelecionada.text : 'Selecione'}</div>
        <span>{isOpen ? <Less /> : <Expand />}</span>
      </BotaolEstilizada>
      {isOpen && (
        <ListaSuspensaEstilizada>
          {opcoes.map((opcao, index) => (
            <ItemListaSuspensaEstilizado
              key={opcao.value}
              focoAtivo={index === opcaoFocada}
              onClick={() => setOpcaoSelecionada(opcao)}
            >
              {opcao.text}
            </ItemListaSuspensaEstilizado>
          ))}
        </ListaSuspensaEstilizada>
      )}
    </LabelEstilizada>
  );
};
