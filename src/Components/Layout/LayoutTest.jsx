import { useApplicationManager } from "../../contexts/ApplicationContext";
import Menubar from "../Menubar/Menubar";
import MenubarMobile from "../Menubar/Mobile/MenubarMobile";
import FullScreenPopupCenter from "../Reusables/FullScreenPopupCenter";
import TopNavigation from "../TopNavigation/TopNavigation";

const Layout = (props) => {
  const { isSmallScreen } = useApplicationManager();
  return isSmallScreen ? (
    <MobileLayout>{props.children}</MobileLayout>
  ) : (
    <DesktopLayout>{props.children}</DesktopLayout>
  );
};

const MobileLayout = (props) => {
  const { isMobileMenuActive } = useApplicationManager();

  return (
    <>
      <FullScreenPopupCenter />
      <TopNavigation />
      {isMobileMenuActive && <MenubarMobile />}
      <div className="w-full min-h-screen font-lexend mt-16 bg-black-main flex justify-center items-center text-white">
        {props.children}
      </div>
    </>
  );
};

const DesktopLayout = (props) => {
  return (
    <>
      <FullScreenPopupCenter />
      <TopNavigation />
      <div className="w-full min-h-screen font-lexend bg-black-main flex justify-start items-start text-white mt-16">
        <div className="border-r-2 border-[#131313] w-[200px] h-screen fixed left-0">
          <Menubar />
        </div>
        <div className=" w-full pl-[200px]">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
