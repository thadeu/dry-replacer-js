"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DryReplacer = void 0;
const lodash_get_1 = __importDefault(require("lodash.get"));
const lodash_set_1 = __importDefault(require("lodash.set"));
const lodash_isarray_1 = __importDefault(require("lodash.isarray"));
const lodash_isplainobject_1 = __importDefault(require("lodash.isplainobject"));
class DryReplacer {
    data;
    constructor(data) {
        this.data = data;
    }
    replaceValue(key, value, data, template) {
        let matchedArray = String(value).match(/{{.*?}}/g);
        if (matchedArray) {
            for (let item of matchedArray.reverse()) {
                let patternKey = item.replace(/[{}]/g, '');
                let templateValue = (0, lodash_get_1.default)(template, key);
                let dataValue = (0, lodash_get_1.default)(data, patternKey);
                let newValue = dataValue;
                if (['string'].includes(typeof dataValue)) {
                    newValue = templateValue.replace(new RegExp(item), dataValue);
                }
                (0, lodash_set_1.default)(template, key, newValue);
            }
        }
    }
    recursiveReplace(data, template) {
        for (let key of Object.keys(template)) {
            let value = template[key];
            if ((0, lodash_isplainobject_1.default)(value)) {
                this.recursiveReplace(data, value);
            }
            else if ((0, lodash_isarray_1.default)(value)) {
                value.map((item) => this.recursiveReplace(data, item));
            }
            else {
                this.replaceValue(key, value, data, template);
            }
        }
        return template;
    }
    try(jsonToParse) {
        let template = JSON.parse(jsonToParse);
        this.recursiveReplace(this.data, template);
        return template;
    }
}
exports.DryReplacer = DryReplacer;
exports.default = DryReplacer;
