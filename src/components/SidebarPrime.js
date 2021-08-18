import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

function SidebarPrime({ sidebar, toggleSideBar }) {
  return (
    <div>
      <Sidebar
        visible={sidebar}
        onHide={toggleSideBar}
        className="purpleScheme"
        style={{ backgroundColor: "#6338A1" }}
        modal={false}
      >
        <div className="flex flex-column purpleScheme">
          <Button
            label="Events"
            icon=" pi pi-calendar"
            iconPos="left"
            className="mb-4 block flex justify-content-start purpleSchema"
          />
          <Button
            label="Education"
            icon=" pi pi-calendar"
            iconPos="left"
            className="mb-4 block flex justify-content-start"
          />
          <Button
            label="something"
            icon=" pi pi-user
            "
            iconPos="left"
            className="mb-4 block flex justify-content-start"
          />
          <Button className="amazon p-p-0 flex justify-content-center ">
            <i className="pi pi-amazon p-px-2"></i>
            {"  "}
            <span>Amazon</span>
          </Button>
        </div>
      </Sidebar>
    </div>
  );
}

export default SidebarPrime;
