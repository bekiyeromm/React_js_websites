var React = require("react");
function Footer() {
  const curryear = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {curryear}</p>
    </footer>
  );
}
export default Footer;
