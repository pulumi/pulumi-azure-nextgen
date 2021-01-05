// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getManagedInstancePrivateEndpointConnection(args: GetManagedInstancePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstancePrivateEndpointConnectionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:sql/v20200202preview:getManagedInstancePrivateEndpointConnection", {
        "managedInstanceName": args.managedInstanceName,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstancePrivateEndpointConnectionArgs {
    /**
     * The name of the managed instance.
     */
    readonly managedInstanceName: string;
    /**
     * The name of the private endpoint connection.
     */
    readonly privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
}

/**
 * A private endpoint connection
 */
export interface GetManagedInstancePrivateEndpointConnectionResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Private endpoint which the connection belongs to.
     */
    readonly privateEndpoint?: outputs.sql.v20200202preview.ManagedInstancePrivateEndpointPropertyResponse;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    readonly privateLinkServiceConnectionState?: outputs.sql.v20200202preview.ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse;
    /**
     * State of the Private Endpoint Connection.
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}