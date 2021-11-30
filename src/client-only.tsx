import * as React from "react";

import { ToggleWrap } from "./toggle-wrap";

export interface ClientOnlyProps {
  children: React.ReactNode;
}

/**
 * Same as `<ToggleWrap enableOnMount />`, usually used on client-side only components.Same as `<ToggleWrap enableOnMount initialState={false} />`, usually used on client-side only components.
 *
 * ---
 *
 * @example
 *
 * ```jsx
 * <ClientOnly>
 *   <div>...</div>
 * </ClientOnly>
 * ```
 */
export function ClientOnly({ children }: ClientOnlyProps) {
  return (
    <ToggleWrap enableOnMount initialState={false}>
      {() => children}
      {/*  */}
    </ToggleWrap>
  );
}
