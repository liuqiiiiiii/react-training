import React from 'React';
import ShoppingList from '../component/ShoppingList.js';

class Content extends React.Component {
  render () {
    return (
      // <ShoppingList name="刘琦"/>
      // // 可以写成这种格式

      <ShoppingList name="刘琦">
        {/* 插入的其他内容 */}
      </ShoppingList>
    )
  }
}

export default Content;
