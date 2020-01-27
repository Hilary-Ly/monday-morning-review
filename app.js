const app = require('express')();
const morgan = require('morgan');
const PORT = 8080;
const { db } = require('./models');

app.use(morgan('dev'));

app.use('/wizardingWorld', require('./routes'));

app.use((req, res) => {
  res.send('This is the Wizard World of Magic Humans and their Pets!');
});

const init = async () => {
  await db.sync({ force: true });
  console.log('db is synced');
  app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`)});
}
init();

