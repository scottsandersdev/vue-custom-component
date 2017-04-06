import buble from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import sass from 'rollup-plugin-sass';
import vue from 'rollup-plugin-vue';

export default {
	entry: 'src/index.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  // sourceMap: 'inline',
  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
	  //allows us to load third-party modules in node_modules
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    //allows us to import common js modules
    commonjs(),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
		buble(),
    uglify(),
		//allows us to use environment vars in our modules
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    sass({
      output: 'build/css/bundle.css',
    })
  ],
}
