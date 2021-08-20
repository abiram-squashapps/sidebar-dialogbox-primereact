import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import education from "../assets/images/education.svg";
import eventSvg from "../assets/images/Vector.svg";
import apartment from "../assets/images/apartment.svg";
import ButtonComponent from "../commonComponents/ButtonComponent";
import learning from "../assets/images/reading.svg";

function SidebarPrime({ sidebar, toggleSideBar }) {
  return (
    <div>
      <Sidebar
        visible={sidebar}
        onHide={toggleSideBar}
        className="purpleScheme w-15rem bg-primary"
        modal={false}
      >
        <div className="flex flex-column purpleScheme">
          <ButtonComponent label="Event" svg={eventSvg} />
          <ButtonComponent label="Education" svg={education} />
          <ButtonComponent label="Property" svg={apartment} />
          <ButtonComponent label="Learning" svg={learning} />
        </div>
      </Sidebar>
    </div>
  );
}

export default SidebarPrime;
