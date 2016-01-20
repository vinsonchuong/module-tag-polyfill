import {childProcess} from 'node-promise-es6';

describe('module-tag-polyfill', () => {
  it('outputs "3...2...1...Hello World!"', async () => {
    const {stdout} = await childProcess.exec('module-tag-polyfill');
    expect(stdout.trim()).toBe('3...2...1...Hello World!');
  });
});
