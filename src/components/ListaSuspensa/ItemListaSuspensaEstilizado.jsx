import styled from '@emotion/styled/macro';

export const ItemListaSuspensaEstilizado = styled.li`
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  border-bottom: 1px solid ${(props) => props.theme.cores.neutras.c};
  padding: ${(props) => props.theme.espacamentos.xs};

  &:last-child {
    border: none;
  }
  color: ${(props) => (props.focoAtivo ? props.theme.cores.focus : 'inherit')};

  &:hover {
    color: ${(props) => props.theme.cores.focus};
  }
`;
