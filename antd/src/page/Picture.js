import React from 'react';
import Picture from '../component/Picture';

class PicturePage extends React.Component {

  render() {
    return (
      <div>
        <Picture key={Picture.id} src={Picture.src}>
          //这里放置的内容就是 props.children
        </Picture>
      </div>
    )
  }
}

export default PicturePage;
