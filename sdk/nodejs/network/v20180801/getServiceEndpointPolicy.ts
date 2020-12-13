// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getServiceEndpointPolicy(args: GetServiceEndpointPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointPolicyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20180801:getServiceEndpointPolicy", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serviceEndpointPolicyName": args.serviceEndpointPolicyName,
    }, opts);
}

export interface GetServiceEndpointPolicyArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the service endpoint policy.
     */
    readonly serviceEndpointPolicyName: string;
}

/**
 * Service End point policy resource.
 */
export interface GetServiceEndpointPolicyResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the service endpoint policy resource.
     */
    readonly resourceGuid: string;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     */
    readonly serviceEndpointPolicyDefinitions?: outputs.network.v20180801.ServiceEndpointPolicyDefinitionResponse[];
    /**
     * A collection of references to subnets.
     */
    readonly subnets: outputs.network.v20180801.SubnetResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
