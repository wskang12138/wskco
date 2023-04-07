export default {
  target: 'browser',
  entry: 'src/index.ts',
  esm: 'babel',
  cjs: 'babel',
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
};
