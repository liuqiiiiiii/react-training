import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    liuqi: [
      {name: 'liuliu', id: 1},
      {name: 'qiqi', id: 2 }
    ]
  }
});
console.log('顶部的 state 数据：', app._store);

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/liuqi').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
