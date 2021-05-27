import Car from '../models/Car';
import User from '../models/User';
import ApiResult from '../utils/ApiResult';

class CarController {
  async index(req, res) {
    try {
      const cars = await Car.findAll({
        attributes: [
          'uid',
          'car_name',
          'brand',
          'year_manufacture',
          'purchase_price',
          'license_plate',
        ],
        include: [
          {
            model: User,
            as: 'user',
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
          },
        ],
      });

      const response = ApiResult.parseResult(
        true,
        { cars },
        cars.length === 0 ? 'emptyCar' : 'carIndex'
      );
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      return res.status(ApiResult.BAD_REQUEST).json(error);
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const carExists = await Car.findByPk(uid, {
        attributes: [
          'uid',
          'car_name',
          'brand',
          'year_manufacture',
          'purchase_price',
          'license_plate',
        ],
        include: [
          {
            model: User,
            as: 'user',
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
          },
        ],
      });

      if (!carExists) {
        throw error;
      }

      const response = ApiResult.parseResult(true, { carExists }, 'carShow');
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      const response = ApiResult.parseError(false, 'carShow', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
    }
  }

  async store(req, res) {
    try {
      const {
        uid,
        car_name,
        brand,
        year_manufacture,
        purchase_price,
        license_plate,
      } = await Car.create(req.body);
      const response = ApiResult.parseResult(
        true,
        {
          cars: {
            uid,
            car_name,
            brand,
            year_manufacture,
            purchase_price,
            license_plate,
          },
        },
        'carStore'
      );
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      return res.status(ApiResult.BAD_REQUEST).json(error);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const [updated] = await Car.update(req.body, {
        where: { uid },
      });

      if (!updated) {
        throw error;
      }
      const response = ApiResult.parseResult(true, { updated }, 'carUpdate');
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      const response = ApiResult.parseError(false, 'carUpdate', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Car.destroy({
        where: { uid },
      });

      if (!deleted) {
        throw error;
      }
      const response = ApiResult.parseResult(true, { deleted }, 'carDelete');
      return res.status(ApiResult.OK).json(response);
    } catch (error) {
      const response = ApiResult.parseError(false, 'carDelete', error.message);
      return res.status(ApiResult.BAD_REQUEST).json(response);
    }
  }
}

export default new CarController();
