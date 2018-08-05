/*global describe, it */

import Echo from '../dist/echo';
import chai from 'chai';

const { assert } = chai;

describe('package', () => {
  it('should export the Echo function', done => {
    assert.isFunction(Echo);

    done();
  });
});
