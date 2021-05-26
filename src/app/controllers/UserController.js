import User from '../models/User';
import ApiResult from '../utils/ApiResult';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: [
          'uid',
          'first_name',
          'last_name',
          'age',
          'cpf',
          'phone',
          'email',
          'type',
        ],
      });

      const response = ApiResult.parseResult(
        true,
        { users },
        users.length === 0 ? 'emptyUser' : 'userIndex'
      );
      return res.status(200).json(response);
    } catch (error) {
      return res.status(ApiResult.BAD_REQUEST).json(error);
    }
  }

  async store(req, res) {
    try {
      const { uid, first_name, last_name, age, cpf, phone, email, type } =
        await User.create(req.body);
      const response = ApiResult.parseResult(
        true,
        { user: { uid, first_name, last_name, age, cpf, phone, email, type } },
        'userStore'
      );
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      return res.status(ApiResult.BAD_REQUEST).json(error);
    }
  }
}

export default new UserController();
