import React from 'react';

import '../styles/footer.scss';

const Footer = () => (
  <footer className='footer'>
     &copy; {new Date().getFullYear()} developed by <a href='https://github.com/marcuspereiradev'>Marcus Pereira</a>
  </footer>
)

export default Footer;
