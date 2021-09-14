import { terser } from 'rollup-plugin-terser';
const config = {
    input: 'src/index.js',
    output: {
        compact: true,
        file: 'umd/mrmeeseeks.js',
        format: 'umd',
        globals: {},
        interop: false,
        sourcemap: 'hidden',
        name: 'meeseeks'
    },
    plugins: [
        terser()
    ]
}

export default config;