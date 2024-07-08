import median from '../src/median.js';

test('median of [1, 2, 3] to equal 2', () => {
    expect(median([1, 2, 3])).toBe(2);
});