# flowtype + watchify + babelify + espowerify + eslint on npm run

```sh
npm run setup # install cli tools
npm run init  # install libraries
npm run start # start incremental building and qunit on browser
npm run stop  # stop http-server
npm run lint
npm run check
```

## scrap

```
libsでその環境の型を書く
自分は、最初はできるだけ握りつぶす方針で導入しました。具体的には次のように書きます。
src/decls/externs.js
declare module "xtend" {
  declare var exports: any;
}
flowtype の libs ではmodule を定義することで import 時に解決するオブジェクトの型定義を指定できます。react や browserify 環境の型はデフォルトで読み込まれています。
exports への declare は default の挙動を定義するので、つまりは次のようなコードが動くようになります。
/* @flow */
import xtend from "xtend";
let ab = xtend({a: 1}, {b: 2});
(正確にはxtendはES modules ではなくcommonjsで書かれbabelによってコンパイルされますが、babelのコンパイル前だとxtendモジュールがあるように見える)
あるいは、要求に応じてより厳密な型を定義してもよいでしょう。
src/decls/externs.js
declare module "xtend" {
  declare function exports<A, B>(a: A, b: B): A & B;
}
グローバル変数として露出する変数の型を握りつぶす場合は、次のように書きます。
src/decls/globals.js
declare var $:any; // jQueryの型チェックを握りつぶす例
(externs.jsとglobals.jsは個人的な分類なので、libsで指定した以下ならどこに書いてもいいです)
膨大なライブラリに型をつけても時間が足りないので、必要に応じて、自分が使う箇所で型の恩恵を受けたい箇所に足していくといいのではないでしょうか。
```

source http://qiita.com/mizchi/items/95ee0101ac22e4b7b662