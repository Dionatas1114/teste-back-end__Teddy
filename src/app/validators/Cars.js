import * as Yup from 'yup';
import ApiResult from '../utils/ApiResult';
import { errorMsg } from '../utils/StructureValidatorMessages';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      car_name: Yup.string()
        .required(errorMsg('validateRequiredCarName'))
        .min(1, errorMsg('validateMinCarachtersCarName'))
        .max(30, errorMsg('validatMaxCarachtersCarName')),
      brand: Yup.string()
        .required(errorMsg('validateRequiredBrand'))
        .min(1, errorMsg('validateMinCarachtersBrand'))
        .max(30, errorMsg('validatMaxCarachtersBrand')),
      year_manufacture: Yup.number()
        .required(errorMsg('validateRequiredYearManufact'))
        .min(1950, errorMsg('validateMinYearManufact'))
        .max(2021, errorMsg('validatMaxYearManufact')),
      purchase_price: Yup.string()
        .required(errorMsg('validateRequiredPurchasePrice'))
        .min(4, errorMsg('validateMinCarachtersPurchasePrice'))
        .max(30, errorMsg('validateMaxCarachtersPurchasePrice')),
      license_plate: Yup.string()
        .required(errorMsg('validateRequiredLicensePlate'))
        .min(7, errorMsg('validateMinCarachtersLicensePlate'))
        .max(10, errorMsg('validateMaxCarachtersLicensePlate')),
      user_uid: Yup.string().required(errorMsg('validateRequiredUserUid')),
    });

    await schema.validate(req.body);
    return next();
  } catch (error) {
    const response = ApiResult.parseError(false, 'validateUser', error.message);
    return res.status(ApiResult.NOT_FOUND).json(response);
  }
};
