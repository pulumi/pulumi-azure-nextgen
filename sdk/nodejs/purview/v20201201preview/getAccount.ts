// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:purview/v20201201preview:getAccount", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountArgs {
    /**
     * The name of the account.
     */
    readonly accountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}

/**
 * Account resource
 */
export interface GetAccountResult {
    /**
     * Cloud connectors.
     * External cloud identifier used as part of scanning configuration.
     */
    readonly cloudConnectors?: outputs.purview.v20201201preview.CloudConnectorsResponse;
    /**
     * Gets the time at which the entity was created.
     */
    readonly createdAt: string;
    /**
     * Gets the creator of the entity.
     */
    readonly createdBy: string;
    /**
     * Gets the creators of the entity's object id.
     */
    readonly createdByObjectId: string;
    /**
     * The URIs that are the public endpoints of the account.
     */
    readonly endpoints: outputs.purview.v20201201preview.AccountPropertiesResponseEndpoints;
    /**
     * Gets or sets the friendly name.
     */
    readonly friendlyName: string;
    /**
     * Gets or sets the identifier.
     */
    readonly id: string;
    /**
     * Identity Info on the tracked resource
     */
    readonly identity?: outputs.purview.v20201201preview.IdentityResponse;
    /**
     * Gets or sets the location.
     */
    readonly location?: string;
    /**
     * Gets the resource identifiers of the managed resources.
     */
    readonly managedResources: outputs.purview.v20201201preview.AccountPropertiesResponseManagedResources;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Get the network ACLs.
     */
    readonly networkAcls?: outputs.purview.v20201201preview.NetworkAclsResponse;
    /**
     * Gets the private endpoint connections information.
     */
    readonly privateEndpointConnections: outputs.purview.v20201201preview.PrivateEndpointConnectionResponse[];
    /**
     * Gets or sets the state of the provisioning.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the Sku.
     */
    readonly sku?: outputs.purview.v20201201preview.AccountSkuResponse;
    /**
     * Tags on the azure resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type.
     */
    readonly type: string;
}