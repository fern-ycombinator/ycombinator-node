/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import { Client as CompanyClient } from "./api/resources/company/client/Client";

export declare namespace YcombinatorApiClient {
    interface Options {
        environment?: environments.YcombinatorApiEnvironment | string;
    }
}

export class YcombinatorApiClient {
    constructor(private readonly options: YcombinatorApiClient.Options) {}

    #company: CompanyClient | undefined;

    public get company(): CompanyClient {
        return (this.#company ??= new CompanyClient(this.options));
    }
}
