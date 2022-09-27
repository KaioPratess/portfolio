const MenuMobile = (props) => {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile-nav">
        <div
          className="close-menu"
          onClick={() => props.setShowMenuMobile(false)}
        >
          X
        </div>
        <nav className="mobile-nav">
          <ul>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Home
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              About
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Projects
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Challenges
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              About
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;
