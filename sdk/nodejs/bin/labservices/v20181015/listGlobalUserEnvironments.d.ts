import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listGlobalUserEnvironments(args: ListGlobalUserEnvironmentsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalUserEnvironmentsResult>;
export interface ListGlobalUserEnvironmentsArgs {
    /**
     * The resource Id of the lab
     */
    readonly labId?: string;
    /**
     * The name of the user.
     */
    readonly userName: string;
}
/**
 * Represents the list of environments owned by a user
 */
export interface ListGlobalUserEnvironmentsResult {
    /**
     * List of all the environments
     */
    readonly environments?: outputs.labservices.v20181015.EnvironmentDetailsResponse[];
}
