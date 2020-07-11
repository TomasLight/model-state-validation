import { IValidator } from "./IValidator";
import { IValidatorAsync } from "./IValidatorAsync";

export function isValidator(validator: any): validator is IValidator<any> {
    return typeof validator.validate === "function";
}

export function isValidatorAsync(validator: any): validator is IValidatorAsync<any> {
    return typeof validator.validateAsync === "function";
}
