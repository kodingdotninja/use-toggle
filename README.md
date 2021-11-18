<!-- markdownlint-disable MD033 MD036 MD041 -->

# use-toggle

Toggle custom hook and component wrapper for React 🔦

---

**Table of contents**

- [Installing](#installing)
- [Example usage](#example-usage)
  - [Toggle hook](#toggle-hook)
  - [Toggle wrapper](#toggle-wrapper)
- [Suggestions and/or questions](#suggestions-andor-questions)
- [Maintainers](#maintainers)
- [License](#license)

---

## Installing

```sh
# using npm
npm install @kodingdotninja/use-toggle

# using yarn
yarn add @kodingdotninja/use-toggle
```

## Example usage

### Toggle hook

```jsx
import { useToggle } from "@kodingdotninja/use-toggle";

function App() {
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
```

### Toggle wrapper

```jsx
import { ToggleWrap } from "kodingdotninja/use-toggle";

function App() {
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
```

## Suggestions and/or questions

Head over to our [dedicated Discord channel for `use-toggle`](https://discord.gg/KsHtDasn7e).

## Maintainers

- Griko Nibras ([@grikomsn](https://github.com/grikomsn))

## License

[MIT License, Copyright (c) 2021 Koding Ninja](./LICENSE)
