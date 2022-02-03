/**
 * react-spinner
 *
 * @packageDocumentation
 */
// eslint-disable-next-line prettier/prettier
import { createElement, memo, useEffect, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { number as IsNumber, string as IsString } from 'prop-types';

/**
 * @public
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export type Props = Readonly<{
  /**
   * CSS class
   */
  className: string;
  /**
   * Indicator used to advance the spinner
   */
  indicator: string;
  /**
   * Max amount of indicator character to show
   */
  max: number;
  /**
   * Timeout for indicator advancement
   */
  timeout: number;
}>;

/**
 * @internal
 */
const generate = (text: string, count: number) => {
  let result = '';
  for (let index = 0; index < count; index++) {
    result += text;
  }
  return { __html: result };
};

/**
 * @internal
 */
type Factor = 2 | -2;

/**
 * Spinner/Loader React component.
 *
 * @example
 * ```ts
 * import React, { Suspense } from 'react';
 * import Spinner from '@gregoranders/react-spinner';
 *
 * export const App = () => {
 *   return (
 *     <Suspense fallback={<Spinner />}>
 *       ...
 *     </Suspense>
 *   );
 * };
 *
 * ```
 * @public
 */
export const Spinner = (properties: Props) => {
  const [state, setState] = useState(1);
  const [factor, setFactor] = useState<Factor>(2);

  useEffect(() => {
    const process = () => {
      if (state >= properties.max) {
        setFactor(-2);
      }
      if (state <= 3) {
        setFactor(2);
      }
      setState(state + factor);
    };

    const handle = setInterval(process, properties.timeout);

    return () => {
      handle && clearInterval(handle);
    };
  });

  return <span className={properties.className} dangerouslySetInnerHTML={generate(properties.indicator, state)}></span>;
};

Spinner.displayName = 'Spinner';

Spinner.defaultProps = {
  className: 'spinner',
  indicator: '&middot;',
  max: 7,
  timeout: 500,
} as const;

Spinner.propTypes = {
  className: IsString,
  indicator: IsString,
  max: IsNumber,
  timeout: IsNumber,
};

export default memo(Spinner);
