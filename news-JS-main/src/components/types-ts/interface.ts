export interface INews {
    source: {
        readonly id: string;
        readonly name: string;
    };
    readonly author: string;
    readonly urlToImage: string;
    readonly description: string;
    readonly publishedAt: string;
    readonly content: string;
    readonly title: string;
    readonly url: string;
}

export interface ISource {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly url: string;
    readonly category: string;
    readonly language: string;
    readonly country: string;
}

export interface IResponce {
    readonly status: string;
    readonly total: number;
    readonly articles: Array<INews>;
}

export interface ISources {
    readonly status: string;
    readonly sources?: Array<ISource>;
}

export interface IOptions {
    readonly sources?: string;
    readonly apiKey?: string;
}

export type DataResponse = IResponce & ISources;
