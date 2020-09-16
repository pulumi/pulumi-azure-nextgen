import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listGlobalUserLabs(args: ListGlobalUserLabsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalUserLabsResult>;
export interface ListGlobalUserLabsArgs {
    /**
     * The name of the user.
     */
    readonly userName: string;
}
/**
 * Lists the labs owned by a user
 */
export interface ListGlobalUserLabsResult {
    /**
     * List of all the labs
     */
    readonly labs?: outputs.labservices.v20181015.LabDetailsResponse[];
}
