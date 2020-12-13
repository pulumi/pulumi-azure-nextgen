// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDisasterRecoveryConfig(args: GetDisasterRecoveryConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetDisasterRecoveryConfigResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:servicebus/v20170401:getDisasterRecoveryConfig", {
        "alias": args.alias,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDisasterRecoveryConfigArgs {
    /**
     * The Disaster Recovery configuration name
     */
    readonly alias: string;
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
 * Single item in List or Get Alias(Disaster Recovery configuration) operation
 */
export interface GetDisasterRecoveryConfigResult {
    /**
     * Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    readonly alternateName?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    readonly partnerNamespace?: string;
    /**
     * Number of entities pending to be replicated.
     */
    readonly pendingReplicationOperationsCount: number;
    /**
     * Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
     */
    readonly provisioningState: string;
    /**
     * role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'
     */
    readonly role: string;
    /**
     * Resource type
     */
    readonly type: string;
}
