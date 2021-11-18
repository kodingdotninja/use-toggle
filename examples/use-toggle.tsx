import { useToggle } from "..";

export default function UseToggleExample() {
  const { state, disable, enable, set, toggle } = useToggle();
  return (
    <div>
      <span>State: {state ? "enabled" : "disabled"}</span>
      <button onClick={disable}>toggle</button>
      <button onClick={enable}>toggle</button>
      <button onClick={() => set(true)}>set true</button>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}
