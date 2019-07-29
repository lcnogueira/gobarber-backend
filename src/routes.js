import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Luiz Claudio',
    email: 'luizcns18@gmail.com',
    password_hash: '34lkj23l4kj3kl',
  });

  return res.json(user);
});

export default routes;
