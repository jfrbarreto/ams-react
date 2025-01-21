import { Space } from "@mantine/core";
import { Outlet, useNavigate } from "react-router";

export function Frame() {
  const navigate = useNavigate();

  const navigateToComponent = () => {
    navigate("/component");
  };

  const navigateToProduct = () => {
    navigate("/product");
  };
  const navigateToReactHooks = () => {
    navigate("/react-hooks");
  };

  const navigateToStateManagers = () => {
    navigate("/state-managers");
  };

  const navigateToReactAdvanced = () => {
    navigate("/react-advanced");
  };

  return (
    <div>
      <button onClick={navigateToComponent}>Component</button>
      <button onClick={navigateToProduct}>Product</button>
      <button onClick={navigateToReactHooks}>React Hooks</button>
      <button onClick={navigateToStateManagers}>State Managers</button>
      <button onClick={navigateToReactAdvanced}>React Advanced</button>
      <div>
        <Space h={48} />
        <Outlet />
      </div>
    </div>
  );
}
