// import { NavLink } from 'react-router-dom';
import { NavLinkStyle } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div>
      <NavLinkStyle to="/">Home</NavLinkStyle>
      <NavLinkStyle to="/movies">Movies</NavLinkStyle>
    </div>
  );
};
