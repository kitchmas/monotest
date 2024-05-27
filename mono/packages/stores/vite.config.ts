import { defineConfig } from "vite"
import dts from "vite-plugin-dts";
import {fileURLToPath, URL} from "url";

export default defineConfig({
        plugins: [
            dts({
                insertTypesEntry: true,

            }),
        ],
    build: {
        lib: {
       // @ts-ignore
            entry:fileURLToPath(new URL("./src/index.ts", import.meta.url)),
            name:"@mono/stores",
            fileName:"index",
        }
    },
});