/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { YcombinatorApi } from "@fern-api/ycombinator";
import * as core from "../../../../core";

export const AllCompanies: core.serialization.ObjectSchema<serializers.AllCompanies.Raw, YcombinatorApi.AllCompanies> =
    core.serialization.object({
        companies: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).Company)
        ),
        page: core.serialization.number(),
        totalPages: core.serialization.number(),
    });

export declare namespace AllCompanies {
    interface Raw {
        companies: serializers.Company.Raw[];
        page: number;
        totalPages: number;
    }
}
