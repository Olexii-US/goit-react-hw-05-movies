import { Header } from './Header/Header';
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children} something in main</main>
    </div>
  );
};
