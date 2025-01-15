import { getRandomElement, generateMessage } from "./index";

describe('Mixed Messages Test', () => {
    const testArray = ["item1", "item2", "item3"];

    test('getRandomElement should return a random element from the array', () => {
        const result = getRandomElement(testArray);
        expect(testArray).toContain(result);
    });

    test('generateMessage should return a complete message', () => {
        const message = generateMessage();
        expect(typeof message).toBe('string');
        expect(message.length).toBeGreaterThan(0);
    });
});