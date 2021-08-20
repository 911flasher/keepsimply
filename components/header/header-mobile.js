

import Logo from '../logo';
import OpenDrawerButton from './open-drawer-button';
import SideDrawer from './side-drawer';

export default function HeaderMobile({ viewer }) {
  

  return (
    <div className="header-mobile">
      <OpenDrawerButton/>

      <SideDrawer/>

      <Logo />

      <style jsx>{`
        .header-mobile {
          display: flex;
          align-items: center;
          padding: 18px 48px;
        }
      `}</style>
    </div>
  );
}
