import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';
import external from 'rollup-plugin-peer-deps-external';

const plugins = [
    external(),
    typescript({
        typescript: require('typescript'),
    }),
    scss({
        output: 'dist/index.scss',
    }),
];

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: 'example/src/react-barong/index.js',
            format: 'es',
            banner: '/* tslint-disable */',
        },
    ],
    plugins,
    external: ['react-hook-form', 'react-bootstrap', 'axios'],
};
