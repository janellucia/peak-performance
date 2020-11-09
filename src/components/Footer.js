import React from 'react';


function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <p>Contact the Team — <a href="mailto:info@peakperfomanceskating.com">info@peakperfomanceskating.com</a></p>
        <p class="disclaimer">Peak Performance Skating disclaims any and all representations and warranties relating to this app., including, without limitation, any warranty as to merchantability or fitness for particular result. The user assumes all risks associated with the use of the app, and results will vary. The app should not be used while operating a vehicle or engaging in any other activity that requires full attention. In no way does this app replace therapy.</p>
        <p>&copy; {(new Date().getFullYear())} Peak Performance Skating</p>
      </div>
    </footer>
  );
}

export default Footer;
