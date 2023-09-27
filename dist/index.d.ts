type Options = {
    strict?: boolean;
};
declare class DryReplacer {
    data: object;
    strict: boolean;
    constructor(data: object, options?: Options);
    replaceValue(key: string, value: any, data: object, template: object): void;
    recursiveReplace(data: object, template: any): object;
    try(jsonToParse: string): object;
}
export default DryReplacer;
