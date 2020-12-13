// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPrivateEndpointConnection(args: GetPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointConnectionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:search/v20200313:getPrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface GetPrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection to the Azure Cognitive Search service with the specified resource group.
     */
    readonly privateEndpointConnectionName: string;
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    readonly searchServiceName: string;
}

/**
 * Describes an existing Private Endpoint connection to the Azure Cognitive Search service.
 */
export interface GetPrivateEndpointConnectionResult {
    /**
     * The ID of the private endpoint connection. This can be used with the Azure Resource Manager to link resources together.
     */
    readonly id: string;
    /**
     * The name of the private endpoint connection.
     */
    readonly name: string;
    /**
     * Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service.
     */
    readonly properties: outputs.search.v20200313.PrivateEndpointConnectionPropertiesResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
