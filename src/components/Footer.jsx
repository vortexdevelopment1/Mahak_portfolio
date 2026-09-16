import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      © {currentYear} Mahak Sarla. All rights reserved.
    </footer>
  );
}
