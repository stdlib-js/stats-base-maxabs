<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# maxabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the maximum absolute value of a strided array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import maxabs from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-maxabs@deno/mod.js';
```

#### maxabs( N, x, stride )

Computes the maximum absolute value of a strided array `x`.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var N = x.length;

var v = maxabs( N, x, 1 );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the maximum absolute value of every other element in `x`,

```javascript
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];
var N = floor( x.length / 2 );

var v = maxabs( N, x, 2 );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = maxabs( N, x1, 2 );
// returns 4.0
```

#### maxabs.ndarray( N, x, stride, offset )

Computes the maximum absolute value of a strided array using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var N = x.length;

var v = maxabs.ndarray( N, x, 1, 0 );
// returns 2.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the maximum absolute value for every other value in `x` starting from the second value

```javascript
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var N = floor( x.length / 2 );

var v = maxabs.ndarray( N, x, 2, 1 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Depending on the environment, the typed versions ([`dmaxabs`][@stdlib/stats/base/dmaxabs], [`smaxabs`][@stdlib/stats/base/smaxabs], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import maxabs from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-maxabs@deno/mod.js';

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*100.0) - 50.0 );
}
console.log( x );

var v = maxabs( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dmaxabs`][@stdlib/stats/base/dmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/max`][@stdlib/stats/base/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/minabs`][@stdlib/stats/base/minabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/nanmaxabs`][@stdlib/stats/base/nanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/smaxabs`][@stdlib/stats/base/smaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-maxabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-maxabs

[test-image]: https://github.com/stdlib-js/stats-base-maxabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-maxabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-maxabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-maxabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-maxabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-maxabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-maxabs/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-maxabs/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-maxabs/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-maxabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-maxabs/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmaxabs]: https://github.com/stdlib-js/stats-base-dmaxabs/tree/deno

[@stdlib/stats/base/max]: https://github.com/stdlib-js/stats-base-max/tree/deno

[@stdlib/stats/base/minabs]: https://github.com/stdlib-js/stats-base-minabs/tree/deno

[@stdlib/stats/base/nanmaxabs]: https://github.com/stdlib-js/stats-base-nanmaxabs/tree/deno

[@stdlib/stats/base/smaxabs]: https://github.com/stdlib-js/stats-base-smaxabs/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
