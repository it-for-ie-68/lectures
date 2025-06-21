# Get started

- Need `zustand` V4. Found rendering error with V5.
- Add in `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "paths": {
      "react": ["./node_modules/@types/react"]
    }
  }
}
```

- `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "docs",
  },
});
```
