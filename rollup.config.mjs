import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/clifford.ts',
  output: {
    file: 'dist/clifford.js',
    format: 'esm'
  },
  plugins: [typescript()]
});
