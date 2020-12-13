// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listGlobalUserEnvironments(args: ListGlobalUserEnvironmentsArgs, opts?: pulumi.InvokeOptions): Promise<ListGlobalUserEnvironmentsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:labservices/v20181015:listGlobalUserEnvironments", {
        "labId": args.labId,
        "userName": args.userName,
    }, opts);
}

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
