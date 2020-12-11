import { stringifyUrl } from 'query-string';
import { UrlBuilder } from './url-builder';

export interface AppRouteWrapper {
    [key: string]: AppRoute;
}

export class AppRoute<TParams = { [key: string]: any }> {
    public readonly path: string = '';
    public readonly pathKeys: string[] = [];
    public readonly queryKeys: string[] = [];

    constructor(path: string);
    constructor(path: string, pathKeys: string[]);
    constructor(path: string, pathKeys: string[], queryKeys: string[]);
    constructor(path: string, pathKeys?: string[], queryKeys?: string[]) {
        if (path) {
            if (path.length > 1) {
                this.path = path.replace(/\/$/gi, '');
            } else {
                this.path = path;
            }
        }
        if (pathKeys) {
            this.pathKeys = [...pathKeys];
        }
        if (queryKeys) {
            this.queryKeys = [...queryKeys];
        }
    }
    
    public url(params: TParams): string {
        let path = this.path;
        if (params) {
            for (let i = 0; i < this.pathKeys.length; i++) {
                const pathKey = this.pathKeys[i];
                const pathValue = (params as any)[pathKey];
                if (pathValue) {
                    path += `/${pathValue}`;
                } else {
                    break;
                }
            }
            const query: any = {};
            if (this.queryKeys.length) {
                for (let i = 0; i < this.queryKeys.length; i++) {
                    const queryKey = this.queryKeys[i];
                    query[queryKey] = (params as any)[queryKey];
                }
            }
            if (this.pathKeys.length || this.queryKeys.length) {
                return stringifyUrl({ url: path, query }, { skipNull: true, skipEmptyString: true });
            } else {
                return UrlBuilder.build(path, params);
            }
        }
        return path;
    }

    public isActive(path: string): boolean;
    public isActive<TParams>(params: TParams, path: string): boolean;
    public isActive(p1: any, p2?: any): boolean {
        if (p2) {
            return this.url(p1) === p2;
        } else {
            return this.path === p1;
        }
    }
}
