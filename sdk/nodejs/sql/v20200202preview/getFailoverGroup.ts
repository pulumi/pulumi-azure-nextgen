// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getFailoverGroup(args: GetFailoverGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFailoverGroupResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:sql/v20200202preview:getFailoverGroup", {
        "failoverGroupName": args.failoverGroupName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetFailoverGroupArgs {
    /**
     * The name of the failover group.
     */
    readonly failoverGroupName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server containing the failover group.
     */
    readonly serverName: string;
}

/**
 * A failover group.
 */
export interface GetFailoverGroupResult {
    /**
     * List of databases in the failover group.
     */
    readonly databases?: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of partner server information for the failover group.
     */
    readonly partnerServers: outputs.sql.v20200202preview.PartnerInfoResponse[];
    /**
     * Read-only endpoint of the failover group instance.
     */
    readonly readOnlyEndpoint?: outputs.sql.v20200202preview.FailoverGroupReadOnlyEndpointResponse;
    /**
     * Read-write endpoint of the failover group instance.
     */
    readonly readWriteEndpoint: outputs.sql.v20200202preview.FailoverGroupReadWriteEndpointResponse;
    /**
     * Local replication role of the failover group instance.
     */
    readonly replicationRole: string;
    /**
     * Replication state of the failover group instance.
     */
    readonly replicationState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
