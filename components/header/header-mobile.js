
import { useState } from "react"
import Logo from '../logo';
import OpenDrawerButton from './open-drawer-button';
import SideDrawer from './side-drawer';
import offlineCategories from "../../db/offlineData//categories";

export default function HeaderMobile() {
  const [open="translateX(0%)", Setopen]=useState(0)

  return (
    <div className="header-mobile">
      <OpenDrawerButton
      
        Setopen={Setopen}
      />

      <SideDrawer
        open={open}
        Setopen={Setopen}
      />

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
