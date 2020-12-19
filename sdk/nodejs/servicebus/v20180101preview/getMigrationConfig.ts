// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getMigrationConfig(args: GetMigrationConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrationConfigResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:servicebus/v20180101preview:getMigrationConfig", {
        "configName": args.configName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMigrationConfigArgs {
    /**
     * The configuration name. Should always be "$default".
     */
    readonly configName: string;
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * Single item in List or Get Migration Config operation
 */
export interface GetMigrationConfigResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
     */
    readonly migrationState: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Number of entities pending to be replicated.
     */
    readonly pendingReplicationOperationsCount: number;
    /**
     * Name to access Standard Namespace after migration
     */
    readonly postMigrationName: string;
    /**
     * Provisioning state of Migration Configuration 
     */
    readonly provisioningState: string;
    /**
     * Existing premium Namespace ARM Id name which has no entities, will be used for migration
     */
    readonly targetNamespace: string;
    /**
     * Resource type
     */
    readonly type: string;
}
