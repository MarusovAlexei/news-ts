import { IResponce, IOptions } from './../types-ts/interface';
import { Method } from './../types-ts/enum';
type optionsObj = { [key: string]: string | number };

class Loader {
    private baseLink: string;
    public options: IOptions;

    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        params: { endpoint: string; options?: IOptions },
        callback = (data: IResponce) => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(Method.Get, params.endpoint, callback, params.options!);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IOptions, endpoint: string) {
        const urlOptions: optionsObj = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: Method, endpoint: string, callback: Function, options: IOptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
