
'use strict';

      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);