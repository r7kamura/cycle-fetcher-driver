# cycle-fetcher-driver
A Cycle.js Driver for making HTTP requests using [stackable-fetcher](https://github.com/r7kamura/stackable-fetcher).

## Install
```sh
npm install @r7kamura/cycle-fetcher-driver
```

## Usage
```js
import Cycle from '@cycle/core';
import { h, makeDOMDriver } from '@cycle/dom'
import { makeFetcherDriver } from '@r7kamura/cycle-fetcher-driver';

Cycle.run(
  ({ DOM, HTTP }) => {
    const url = 'http://example.com';
    const request$ = Rx.Observable.just({ method: 'GET', url });
    const vtree$ = responses.HTTP
      .filter((response$) => response$.request.url === url)
      .mergeAll()
      .map(({ body }) => body)
      .startWith('Loading...')
      .map(text => h('h1', text));
    return {
      DOM: vtree$,
      HTTP: request$
    };
  },
  {
    DOM: makeDOMDriver('body'),
    HTTP: makeFetcherDriver()
  }
);
```
