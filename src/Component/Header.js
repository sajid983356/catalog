import { HashRouter as Router} from 'react-router-dom';

import NavbarHeader from './NavbarHeader';
import LinkRouter from './LinkRouter';

function Header() {
  return (
    <Router>
      <NavbarHeader />
      <LinkRouter />
    </Router>
  );
}

export default Header;
