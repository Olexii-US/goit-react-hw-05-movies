import styled from 'styled-components';

export const HeaderSearch = styled.header`
  top: 0;
  left: 0;
  position: sticky;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #aaa;
  background-color: rgba(219, 221, 255, 0.306);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  font-size: 16px;
  width: 80px;
  height: 30px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;

  ::placeholder font: inherit;
font-size: 18px;
`;
