type Options = {
    strict?: boolean;
    keepTypeof?: boolean;
    stringifyTypeof?: boolean;
    [key: string]: any;
};
declare class DryReplacer {
    data: object;
    strict?: boolean;
    keepTypeof?: boolean;
    stringifyTypeof?: boolean;
    constructor(data: object, options?: Options);
    replaceValue(key: string, value: any, data: object, template: object): void;
    recursiveReplace(data: object, template: any): object;
    try(jsonToParse: string, options?: {}): object;
}
export default DryReplacer;
