"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utils helper
 */
class TransferObjectUtils {
    /**
     * Compose all data to result response package
     *
     * @param responseCode - 200 | 400 | 500
     * @param message - any info text message
     * @param data - response data object
     *
     * @return ready object for REST response
     */
    static createResponseObject(responseCode, message, data) {
        const result = {
            code: responseCode || 200
        };
        if (message) {
            result.message = message;
        }
        if (data) {
            result.data = data;
        }
        return result;
    }
}
exports.TransferObjectUtils = TransferObjectUtils;
//# sourceMappingURL=transferObject.utils.js.map