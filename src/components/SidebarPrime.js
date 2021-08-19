import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

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
          <Button
            label="Events"
            icon=" pi pi-calendar"
            iconPos="left"
            className="py-4 btn block flex justify-content-start"
          />
          <Button
            label="Education"
            icon=" pi pi-calendar"
            iconPos="left"
            className="py-4 btn block flex justify-content-start"
          />
          <Button
            label="something"
            icon=" pi pi-user
            "
            iconPos="left"
            className=" py-4 btn block flex justify-content-start"
          />
        </div>
      </Sidebar>
    </div>
  );
}

export default SidebarPrime;
