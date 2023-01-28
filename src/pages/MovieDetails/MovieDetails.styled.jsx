import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  margin: 24px;
  line-height: 2.5;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: grey;
  padding: 2px;
  background-color: rgb(243, 255, 254);
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  :hover {
    color: red;
  }
`;

export const MovieBox = styled.div`
  display: flex;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const MovieImg = styled.img`
  margin: 10px;
  object-fit: contain;

  }
`;

export const MovieDetailsBox = styled.div`
  padding: 10px;
`;

export const GenresList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
export const GenresListItem = styled.li`
  padding-left: 12px;
  &:first-child {
    padding-left: 0px;
  }
`;

export const MovieInfoBox = styled.div`
  padding: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const InfoList = styled.ul`
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
  list-style: none;
`;

export const InfoListLink = styled(Link)`
  text-decoration: none;
  :hover {
    color: red;
  }
`;
