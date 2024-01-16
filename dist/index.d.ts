type Options = {
    strict?: boolean;
    keepTypeof?: boolean;
};
declare class DryReplacer {
    data: object;
    strict?: boolean;
    keepTypeof?: boolean;
    constructor(data: object, options?: Options);
    replaceValue(key: string, value: any, data: object, template: object): void;
    recursiveReplace(data: object, template: any): object;
    try(jsonToParse: string): object;
}
export default DryReplacer;
