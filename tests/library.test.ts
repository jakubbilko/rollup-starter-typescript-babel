import MyLibrary from '../src/library';

describe('MyLibrary', () => {
  test('should have test() method', () => {
    expect(MyLibrary.test).toBeDefined();
  });

  describe('test()', () => {
    test('should return correct string', () => {
      const output: string = MyLibrary.test();
      expect(output).toEqual('this is my library!');
    });
  });
});