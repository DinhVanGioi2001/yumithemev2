import { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { Credential } from '../../../@types/auth';
import users from '../../../utils/users.json';

function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return authenticate();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function authenticate() {
    const { email, password } = req.body;
    const user = (users as Array<Credential>).find(
      (credential) => credential.email === email && credential.password === password
    );

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 24 hours
    const accessToken = sign({ sub: user.email }, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });

    // return basic user details and token
    return res.status(200).json({ accessToken, user });
  }
}

export default loginHandler;
