import Koa from 'koa';
import koaStatic from 'koa-static';
import fs from 'fs';
import path from 'path';

const app = new Koa();

app.use(koaStatic('.dist'));
app.use((ctx, next) => {
  ctx.type = 'html';
  ctx.body = fs.readFileSync(path.resolve('src/html/index.html'));
});

app.listen(process.env.PORT || 3030, () => {
  console.log(`listening on port ${process.env.PORT || 3030}`);
});