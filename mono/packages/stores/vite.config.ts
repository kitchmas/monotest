import { defineConfig } from "vite"
import { glob } from "glob"
// @ts-ignore
import path from 'path';

export default defineConfig({
    build: {
        lib: {
       // @ts-ignore
            entry: glob.sync( 'src/**/**.ts').map(file => path.resolve(__dirname, file)) ,
            name:"@mono/stores",
        },
    },

});