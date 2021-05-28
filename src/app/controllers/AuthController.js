import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';
import ApiResult from '../utils/ApiResult';

class AuthController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        const response = ApiResult.parseError(false, 'incorrectUser');
        return res.status(ApiResult.UNAUTHORIZED).json(response);
      }

      if (!(await user.checkPassword(password))) {
        const response = ApiResult.parseError(false, 'incorrectPassw');
        return res.status(ApiResult.UNAUTHORIZED).json(response);
      }

      const { uid, first_name, last_name, age, cpf, phone, type } = user;

      const response = ApiResult.parseResult(true, { user }, 'loginSuccess');
      return res.status(ApiResult.OK).json({
        success: true,
        message: response.message,
        user: {
          uid,
          first_name,
          last_name,
          age,
          cpf,
          phone,
          email,
          type,
        },
        token: jwt.sign({ uid }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      const response = ApiResult.parseError(false, 'authLogin', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
    }
  }
}

export default new AuthController();
