import styled from 'styled-components';

export const WritterContainer = styled.div`
  display: flex;
  gap: 1em;
`;

export const ChatInput = styled.input`
  font-size: 1.2rem;
  padding: 0.6em 1em;
  border-radius: 0.5em;
  border: solid #333 0;
  box-shadow: 0 0 5px #111;
  flex: 1;
  transition: border 100ms;

  &:focus,
  &:hover {
    outline: none;
    border-width: 4px;
  }
`;

export const ChatButton = styled.button`
  padding: 0.6em 2em;
  border-radius: 0.5em;
  border: solid #111 2px;
  cursor: pointer;
  background: #111;
  color: #666;
  font-weight: bold;
  transition: background 100ms;
  transition: border 100ms;

  &:active {
    background-color: #333;
  }

  &:focus,
  &:hover {
    outline: none;
    border-color: #666;
  }
`;
