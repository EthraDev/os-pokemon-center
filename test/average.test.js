import average from "../src/average";

test('average of [1, 2, 3] to equal 2', () => {
    expect(average([1, 2, 3])).toBe(2);
});

test('average of [1, 2, 3, 4, 5] to equal 3', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
});

test('average of [1, 2, 3, 4, 5, 6] to equal 3.5', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
});