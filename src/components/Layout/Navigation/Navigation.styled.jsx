import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
  margin-right: 12px;
  margin-left: 12px;

  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
