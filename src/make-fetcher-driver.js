import { Rx } from '@cycle/core'
import Fetcher from 'stackable-fetcher'

export default function makeFetcherDriver(fetcher = new Fetcher()) {
  return (request$) => {
    return request$.map((request) => {
      const response$ = Rx.Observable.fromPromise(
        (request.fetcher || fetcher)[request.method.toLowerCase()](
          request.url,
          request.parameters,
          request.headers
        )
      );
      response$.request = request;
      return response$;
    }).share();
  };
}
