// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:datamigration/v20180419:getService", {
        "groupName": args.groupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * Name of the resource group
     */
    readonly groupName: string;
    /**
     * Name of the service
     */
    readonly serviceName: string;
}

/**
 * A Database Migration Service resource
 */
export interface GetServiceResult {
    /**
     * HTTP strong entity tag value. Ignored if submitted
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The resource kind. Only 'vm' (the default) is supported.
     */
    readonly kind?: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The resource's provisioning state
     */
    readonly provisioningState: string;
    /**
     * The public key of the service, used to encrypt secrets sent to the service
     */
    readonly publicKey?: string;
    /**
     * Service SKU
     */
    readonly sku?: outputs.datamigration.v20180419.ServiceSkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
     */
    readonly virtualSubnetId: string;
}
