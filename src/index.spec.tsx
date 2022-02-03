/**
 * @jest-environment jsdom
 */
// eslint-disable-next-line prettier/prettier
import { createElement, memo } from 'react';
// eslint-disable-next-line prettier/prettier
import { act, render } from '@testing-library/react';

import * as TestSubject from '.';

const advanceTimer = (count: number) => {
  act(() => {
    jest.advanceTimersByTime(count);
  });
};

const generateIndicatorResult = (text: string, count: number) => {
  let result = '';
  for (let index = 0; index < count; index++) {
    result += text;
  }
  return result;
};

describe('react-spinner', () => {
  jest.useFakeTimers();

  beforeAll(() => {
    jest.clearAllTimers();
  });

  describe('module', () => {
    it('should export component', () => {
      expect(TestSubject.Spinner).toBeDefined();
    });

    it('should export default', () => {
      expect(TestSubject.default).toBeDefined();
    });

    it('should export component as memoized component', () => {
      expect(TestSubject.default).toStrictEqual(memo(TestSubject.Spinner));
    });
  });

  describe('snapshot', () => {
    it('should match default', () => {
      const component = render(<TestSubject.default />);
      expect(component).toMatchSnapshot();
    });
  });

  it('should render custom indicator custom number of times', () => {
    const max = 6;
    const timeout = 3;
    const indicator = 'b';
    let expected = '';
    const result = render(<TestSubject.default max={max} timeout={timeout} indicator={indicator} />);

    const element = result.container.firstChild;

    if (!element) return;

    expected = generateIndicatorResult(indicator, 1);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 3);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 5);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 7);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 9);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 7);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 5);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 3);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 1);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);

    expected = generateIndicatorResult(indicator, 3);
    expect(element.textContent).toStrictEqual(expected);
    advanceTimer(timeout);
  });
});
