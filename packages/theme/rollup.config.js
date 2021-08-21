/* eslint-disable global-require */
import typescript from 'rollup-plugin-typescript2';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import progress from 'rollup-plugin-progress';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    visualizer({ title: `${pkg.name} Visualizer`, template: 'sunburst' }),
    progress({
      clearLine: false, // default: true
    }),
    terser({
      // remove all comments
      format: {
        comments: false,
      },
      // prevent any compression
      compress: true,
    }),
    typescript({
      clean: true,
      tsconfig: 'tsconfig.build.json',
      typescript: require('typescript'),
    }),
    analyze({ summaryOnly: true }),
  ],
};
