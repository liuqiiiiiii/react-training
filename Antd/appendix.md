# 需要了解的 ES6 语法

## [详细请看阮一峰老师的教程](http://es6.ruanyifeng.com/)

### let 和 const

let 和 const 用于声明变量
let 声明的变量是可变的，const 声明的变量是不可变的

```js
let foo = 1;
foo = 2;

const oof = 1;
oof = 2;// 报错
```

上面代码中，let 声明的变量 foo 是可以重新赋值，但是如果对 oof 声明的变量重新赋值，就会报错。

注意：如果 const 声明的变量指向一个对象，那么该对象的属性是可变的。

```js
const foo = {
  bar = 1;
};

foo.bar = 2;
```

上面代码中，变量 foo 本身是不可变的，即 foo 不能指向另一个对象，但是对象内部的属性是可变的，只是因为这时 foo 保存的是一个指针，这个指针本身不可变，但它指向的对象本身是可变的。

### 解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

```js
let [a, b, c] = [1, 2, 3 ];
```

上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。
解构赋值不仅可以用于数组，还可以用于对象。

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo;// aaa
bar;// bbb
```

解构赋值时，还可以设置默认值。

```js
let [ x, y = 'b' ] = [ 'a' ]; // x='a', y='b'
```

上面代码中变量 y 解构赋值时没有取到值，所以默认值就生效了。

### 对象的简介表示法

ES6 允许写入变量和函数，作为对象的属性和方法。

```js
const foo = 'bar';
const liuqi = { foo };
liuqi;// { foo: 'bar' }
```

除了属性可以简写，方法也可以简写。

```js
const o = {
  method() {
    return "hello";
  }
};
// 等同于

const o = {
  method: function() {
    return "hello";
  }
};
```

### 箭头函数

ES6 允许使用箭头（=>）定义函数

```js
var f = v => v;
// 等同于
var f = function(v) {
  return v;
};
```

如果箭头函数不需要参数或者需要多个参数，就使用一个圆括号代表参数部分。

```js
var f = () => 5;
// 等同于
var f = function () { return 5; };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 return 语句返回。

```js
var sum = (num1, num2) => { return num1 + num2; };
```

### rest 参数

ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用 argument 对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```js
function add(...values) {
  let sum = 0;

  for(var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 3, 5);// 10
```

上面代码的 add 函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。

### 扩展运算符

扩展运算符（spread）是三个点（...）。它好比 rest 运算的逆运算，将一个数组转为用逗号分隔的参数序列。

```js
console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
cosole.log(...document.querySelectorAll('div'));
// [div, div, div]
```

对象也可以使用扩展运算符

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x// 1
y// 2
z// { a: 3, b: 4 }
```

### class

ES6 允许新建“类”（class）。

```js
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);
    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

上面是一个定义

- constructor()：构造函数，新建实例的时候自动调用这个方法。
- extends：第一行的 extends 关键字表示继承某个父类。
- super：子类方法里面的 super 指代父类。
- get()：get 是取值器，读取该方法定义的属性时，会自动执行指定的代码。
- set()：set 是赋值器，赋值该方法定义的属性时，会自动执行指定的代码。
- static：方法前面加上 static 关键字，表示该方法是静态的方法，定义在类上面，而不是定义在实例对象上面，以上面为例就是 SkinnedMesh.defalutMatrix()这样调用。

定义了类以后，就可以新建实例了

```js
const instance = SkinnedMesh();
```

### Promise 对象

Promise 是 ES6 引入的封装异步操作的统一接口。它返回一个对象，包含了异步操作的信息。
Promise 本身是一个构造函数，提供了 resolve 和 reject 两个方法。一旦异步操作成功结束，就调用 resolve 方法，将 Promise 实例对象的状态改为 resolved，一旦异步操作失败，就调用 reject 方法，将 Promise 实例的状态改为 rejected。

```js
function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}
```

上面代码中，timeout 函数返回一个 Promise 实例，在指定时间以后，将状态改为 resolved。

```js
var p = timeout(1000).then(() => {
  return timeout(2000);
}).then(() => {
  throw new Error("hmm");
}).catch(err => {
  return Promise.all([timeout(100), timeout(200)]);
})
```

一旦 Promise 实例的状态改变以后，就可以使用 then() 方法指定下面将要执行的函数，catch 方法用来处理 rejected 状态的情况。

### module

ES6 意义最重大的语法变化，就是引入了模块（module）。
一个模块内部，使用 export 命令输出对外的接口。

```js
//lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```

上面的模块，输出了 sum 和 pi 两个接口。
import 命令用于引入该模块。

```js
// app.js
import * as math from "lib/math";
alert("2π = " + math.sum(math.pi, math.pi));
```

上面代码中， * 表示引入所有接口，也可以只引入指定的接口。

```js
// otherApp.js
import { sum, pi } from "lib/math";
alert("2π = " + sum(pi, pi));
```
