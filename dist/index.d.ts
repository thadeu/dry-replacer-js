declare class DryReplacer {
    data: object;
    constructor(data: object);
    replaceValue(key: string, value: any, data: object, template: object): void;
    recursiveReplace(data: object, template: any): object;
    try(jsonToParse: string): object;
}
export default DryReplacer;
