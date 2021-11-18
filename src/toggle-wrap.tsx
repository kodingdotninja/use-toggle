import * as React from "react";

import { useToggle, UseToggleReturnType } from "./use-toggle";

export const ENABLE_ON_MOUNT_KEY = "enableOnMount";
export const DISABLE_ON_MOUNT_KEY = "disableOnMount";

export type OnMountProps = { [ENABLE_ON_MOUNT_KEY]?: boolean } | { [DISABLE_ON_MOUNT_KEY]?: boolean };

export type ToggleWrapProps = OnMountProps & {
  initialState?: boolean;
  children: (toggle: UseToggleReturnType) => React.ReactNode;
};

export type ToggleWrapType = (props: ToggleWrapProps) => JSX.Element;

export const ToggleWrap: ToggleWrapType = ({ initialState, children, ...props }) => {
  const toggle = useToggle(initialState);

  React.useEffect(() => {
    if (ENABLE_ON_MOUNT_KEY in props) toggle.enable();
    if (DISABLE_ON_MOUNT_KEY in props) toggle.disable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children(toggle)}</>;
};
