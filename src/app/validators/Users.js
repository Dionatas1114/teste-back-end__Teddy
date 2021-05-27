import * as Yup from 'yup';
import ApiResult from '../utils/ApiResult';
import { errorMsg } from '../utils/StructureValidatorMessages';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      first_name: Yup.string()
        .required(errorMsg('validateRequiredFirstName'))
        .min(1, errorMsg('validateMinCarachtersFirstName'))
        .max(30, errorMsg('validatMaxCarachtersFirstName')),
      last_name: Yup.string()
        .required(errorMsg('validateRequiredLastName'))
        .min(1, errorMsg('validateMinCarachtersLastName'))
        .max(30, errorMsg('validatMaxCarachtersLastName')),
      age: Yup.number()
        .required(errorMsg('validateRequiredAge'))
        .min(18, errorMsg('validateMinAge'))
        .max(120, errorMsg('validatMaxAge')),
      cpf: Yup.string()
        .required(errorMsg('validateRequiredCpf'))
        .min(11, errorMsg('validateMinCarachtersCpf'))
        .max(11, errorMsg('validatMaxCarachtersCpf')),
      phone: Yup.string()
        .required(errorMsg('validateRequiredPhone'))
        .min(9, errorMsg('validateMinCarachtersPhone'))
        .max(15, errorMsg('validateMaxCarachtersPhone')),
      email: Yup.string()
        .required(errorMsg('validateRequiredEmail'))
        .email(errorMsg('validateValidEmail')),
      type: Yup.boolean().required(errorMsg('validateRequiredUserType')),
      password: Yup.string()
        .required(errorMsg('validateRequiredPassw'))
        .min(4, errorMsg('validateMinCarachtersPassw'))
        .max(8, errorMsg('validateMaxCarachtersPassw')),
    });

    await schema.validate(req.body);
    return next();
  } catch (error) {
    const response = ApiResult.parseError(false, 'validateUser', error.message);
    return res.status(ApiResult.NOT_FOUND).json(response);
  }
};
