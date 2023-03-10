/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { YcombinatorApi } from "@fern-api/ycombinator";
import * as core from "../../../../core";

export const Status: core.serialization.Schema<serializers.Status.Raw, YcombinatorApi.Status> =
    core.serialization.enum_(["Active", "Public", "Acquired", "Inactive"]);

export declare namespace Status {
    type Raw = "Active" | "Public" | "Acquired" | "Inactive";
}
