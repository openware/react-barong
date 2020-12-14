import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';
import external from 'rollup-plugin-peer-deps-external';
import fs from 'fs';

const scssOutput =
    process.env.BUILD === 'dev'
        ? function (styles, styleNodes) {
              fs.writeFileSync('dist/index.scss', styles);
              fs.writeFileSync('example/src/react-barong/index.scss', styles);
          }
        : 'dist/index.scss';

const plugins = [
    external(),
    typescript({
        typescript: require('typescript'),
    }),
    scss({
        output: scssOutput,
    }),
];

const output = [
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
];

if (process.env.BUILD === 'dev') {
    output.push({
        file: 'example/src/react-barong/index.js',
        format: 'es',
        banner: '/* tslint-disable */',
    });
}

export default {
    input: 'src/index.tsx',
    output,
    plugins,
    external: ['react-hook-form', 'react-bootstrap', 'axios'],
};
