import Navbar from './Navbar';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
        {children}
      </Container>
    </div>
  );
}

export default Layout;
