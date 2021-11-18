import { ToggleWrap } from "..";

export default function ToggleWrapExample() {
  return (
    <ToggleWrap>
      {({ state, disable, enable, set, toggle }) => (
        <div>
          <span>State: {state ? "enabled" : "disabled"}</span>
          <button onClick={disable}>toggle</button>
          <button onClick={enable}>toggle</button>
          <button onClick={() => set(true)}>set true</button>
          <button onClick={toggle}>toggle</button>
        </div>
      )}
    </ToggleWrap>
  );
}
