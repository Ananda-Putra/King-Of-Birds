import 'dotenv/config';
import express from 'express';
import routes from './routes/routes.js';

BigInt.prototype.toJSON = function() {
  return this.toString();
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'RESTful API King of Birds with Express & Prisma' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});