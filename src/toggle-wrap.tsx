import * as React from "react";

import { useToggle, UseToggleReturnType } from "./use-toggle";

export const ENABLE_ON_MOUNT_KEY = "enableOnMount";
export const DISABLE_ON_MOUNT_KEY = "disableOnMount";

/**
 * Toggle wrap props for determining if toggle should be enabled or disabled on mount.
 */
export type OnMountProps = { [ENABLE_ON_MOUNT_KEY]?: boolean } | { [DISABLE_ON_MOUNT_KEY]?: boolean };

export type ToggleWrapProps = OnMountProps & {
  initialState?: boolean;
  children: (toggle: UseToggleReturnType) => React.ReactNode;
};

export type ToggleWrapType = (props: ToggleWrapProps) => JSX.Element;

/**
 * Toggle wrap component which accepts initial state and enable/disable on mount prop.
 * Returns a render function to consume the toggle hook.
 *
 * ---
 *
 * @param props Toggle wrap props
 *
 * @returns Render function to consume the toggle hook
 *
 * @example
 *
 * ```jsx
 * <ToggleWrap>
 *    {({ state, disable, enable, set, toggle }) => (
 *      <div>...</div>
 *    )}
 *  </ToggleWrap>
 * ```
 */
export const ToggleWrap: ToggleWrapType = ({ initialState, children, ...props }) => {
  const toggle = useToggle(initialState);

  React.useEffect(() => {
    if (ENABLE_ON_MOUNT_KEY in props) toggle.enable();
    if (DISABLE_ON_MOUNT_KEY in props) toggle.disable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children(toggle)}</>;
};
