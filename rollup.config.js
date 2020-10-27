import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';
import fs from 'fs';

const plugins = [
    typescript({
        typescript: require('typescript'),
    }),
    scss({
        output: true,
        output: function (styles, styleNodes) {
            fs.writeFileSync('dist/index.scss', styles);
            fs.writeFileSync('example/src/react-barong/index.scss', styles);
        },
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
};
