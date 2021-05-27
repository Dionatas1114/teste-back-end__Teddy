import User from '../models/User';
import Car from '../models/Car';
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
        include: [
          {
            model: Car,
            as: 'user',
            attributes: [
              'uid',
              'car_name',
              'brand',
              'year_manufacture',
              'purchase_price',
              'license_plate',
            ],
          },
        ],
      });

      const response = ApiResult.parseResult(
        true,
        { users },
        users.length === 0 ? 'emptyUser' : 'userIndex'
      );
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      const response = ApiResult.parseError(false, 'userIndex', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const userExists = await User.findByPk(uid, {
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
        include: [
          {
            model: Car,
            as: 'user',
            attributes: [
              'uid',
              'car_name',
              'brand',
              'year_manufacture',
              'purchase_price',
              'license_plate',
            ],
          },
        ],
      });

      if (!userExists) {
        throw error;
      }

      const response = ApiResult.parseResult(true, { userExists }, 'userShow');
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      const response = ApiResult.parseError(false, 'userIndex', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
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
      const response = ApiResult.parseError(false, 'userStore', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const { email, oldPassword } = req.body;

      const user = await User.findByPk(uid);

      if (email !== user.email) {
        const response = ApiResult.parseError(false, 'incorrectUser');
        return res.status(ApiResult.UNAUTHORIZED).json(response);
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        const response = ApiResult.parseError(false, 'incorrectPassw');
        return res.status(ApiResult.UNAUTHORIZED).json(response);
      }

      const { first_name, last_name } = await user.update(req.body);

      const response = ApiResult.parseResult(
        true,
        { user: { uid, first_name, last_name, email } },
        'userUpdate'
      );
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      const response = ApiResult.parseError(false, 'userUpdate', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
    }
  }
}

export default new UserController();
