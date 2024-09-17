import { body, validationResult } from "express-validator";

const serviceValidationRules = [
    body('service_name').notEmpty().withMessage('service_name is required').isLength({ min: 2 }).withMessage('service_name must be at least 2 characters long'),
    body('description').notEmpty().withMessage('service_name is required').isLength({ min: 8 }).withMessage('description must be at least 8 characters long'),
    body('price').notEmpty().withMessage('Price is required').isFloat({ gt: 0 }).withMessage('Price must be greater than 0')
]
const updateserviceValidationRules = [
    body('service_name').optional().isLength({ min: 2 }).withMessage('service_name must be at least 2 characters long'),
    body('description').optional().isLength({ min: 8 }).withMessage('description must be at least 8 characters long'),
    body('price').optional().isFloat({ gt: 0 }).withMessage('Price must be greater than 0')
]


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export {
    serviceValidationRules,
    updateserviceValidationRules,
    validate
}