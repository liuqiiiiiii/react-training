// 通过赋值改变数据（Data change with mutation）
var player = { score: 1, name:'liuqi' };
player.score = 2;
// 现在 player 是{ score: 2, name: 'liuqi' }

// 不通过赋值改变数据（Data change without mutation）
var sporter = { score: 1, name: 'liuqi'};
var newSporter = Object.assign( {}, sporter, { score: 2 } );
// 现在 sporter 没改变，但是 newSporter 是 { score: 2, name: 'liuqi' }
// 或者使用对象扩展语法，可以写成：var newSporter = { ...sporter, score: 2 }

var playerAndSporter = '最终结果是相同的，但通过不直接改变数据（或更改底层数据）有一个额外的好处——帮助我增强组件和整体的应用性能。';

var complexFunctionsBecomeSimple = '不可变性(Immutability) 可以使复杂功能更容易实现，后面将实现一个 “过程回放” 功能，允许我查看井字游戏的历史记录并 “跳回” 以前的动作(悔棋)。此功能并非只限于特定游戏，如撤消和重做某些操作的功能是应用程序中的常见要求。避免直接修改数据可以让我保留游戏历史的先前版本，并在以后重复使用。';

var detectinChanges = '检测可变对象的变化很困难，因为它们是直接修改的。该检测需要将可变对象与其自身的先前副本进行比较，以及要遍历的整个对象树。检测不可变对象中的更改要容易得多。如果被引用的不可变对象与前一个不同，则该对象已更改。仅此而已。'

var DeterminingWhenToRerenderInReact = 'React 中不可变数据最大好处在于当您构建简单的纯(pure)组件时。由于不可变性(Immutability) 可以更容易地确定是否已经进行了更改，这也有助于确定组件何时需要重新渲染。'
