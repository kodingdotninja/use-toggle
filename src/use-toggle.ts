import * as React from "react";

export type UseToggleReturnType = {
  state: boolean;
  disable: () => void;
  enable: () => void;
  set: (newState: boolean) => void;
  toggle: () => void;
};

export type UseToggleType = (initialState?: boolean) => UseToggleReturnType;

/**
 * Toggle hook which accepts initial state and returns the toggle state and controls.
 *
 * ---
 *
 * @param initalState Initial value for toggle hook
 *
 * @returns Toggle value and controls
 *
 * @example
 *
 * ```jsx
 * const { state, disable, enable, set, toggle } = useToggle(initalState);
 * ```
 */
export const useToggle: UseToggleType = (initalState = false) => {
  const [state, setState] = React.useState<boolean>(initalState);

  const disable = React.useCallback(() => setState(false), []);
  const enable = React.useCallback(() => setState(true), []);
  const set = React.useCallback((newState: boolean) => setState(newState), []);
  const toggle = React.useCallback(() => setState((prev) => !prev), []);

  return { state, disable, enable, set, toggle };
};
