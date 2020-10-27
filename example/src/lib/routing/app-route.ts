import { UrlBuilder } from './url-builder';

export class AppRoute<TParams = any> {
    public readonly path: string;

    constructor(path: string) {
        this.path = path;
    }

    public url(params: TParams): string {
        return UrlBuilder.build(this.path, params);
    }

    public isActive(): boolean {
        let result = false;
        if (window && window.location) {
            result = window.location.hash.replace(/^#\//gi, '') === this.path.replace(/^\//gi, '');
            // console.log(
            //     result,
            //     window.location.hash.replace(/^#\//gi, ''),
            //     this.path.replace(/^\//gi, '')
            // );
        }
        return result;
    }
}
