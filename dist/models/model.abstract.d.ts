import { CONNECTION_STATUS } from "../index";
export declare abstract class ModelAbstract {
    static status: CONNECTION_STATUS;
    id: string;
    protected collectionName: string;
    constructor();
    static find<T = any>(query?: any, options?: any): Promise<Array<T>>;
    static findOne<T = any>(query?: any, options?: any): Promise<T>;
    protected static findEmitter(query: any, options?: any): Promise<any>;
    save(options?: any | string): Promise<any>;
    protected abstract saveEmitter(options: any): Promise<any>;
    protected beforeValidate(): void;
    validate(): any | true;
    protected beforeSave(): void;
    protected afterSave(): void;
    update(options?: any | string): Promise<any>;
    protected abstract updateEmitter(options: any): Promise<any>;
    beforeUpdate(): void;
    afterUpdate(): void;
    protected abstract removeEmitter(query: any): Promise<any>;
    remove(query: any): Promise<any>;
    static clone<T>(classIns: any, data: any): T;
    protected static castStringQuery(query: string | any): any;
}
