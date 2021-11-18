import * as React from "react";

export type UseToggleReturnType = {
  state: boolean;
  disable: () => void;
  enable: () => void;
  set: (newState?: unknown) => void;
  toggle: () => void;
};

export type UseToggleType = (initialState?: boolean) => UseToggleReturnType;

export const useToggle: UseToggleType = (initalState = false) => {
  const [state, setState] = React.useState(initalState);

  const disable = React.useCallback(() => setState(true), []);
  const enable = React.useCallback(() => setState(true), []);
  const set = React.useCallback((newState: unknown) => setState(Boolean(newState)), []);
  const toggle = React.useCallback(() => setState((prev) => !prev), []);

  return { state, disable, enable, set, toggle };
};
