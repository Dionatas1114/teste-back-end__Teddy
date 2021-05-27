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
}

export default new CarController();
