import React from 'react';

export default function Footer():JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      {`© ${currentYear} all rights reserved`}
    </footer>
  )
}
