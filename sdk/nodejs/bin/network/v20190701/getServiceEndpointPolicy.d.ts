import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getServiceEndpointPolicy(args: GetServiceEndpointPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointPolicyResult>;
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
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the service endpoint policy resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the service endpoint policy resource.
     */
    readonly resourceGuid: string;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     */
    readonly serviceEndpointPolicyDefinitions?: outputs.network.v20190701.ServiceEndpointPolicyDefinitionResponse[];
    /**
     * A collection of references to subnets.
     */
    readonly subnets: outputs.network.v20190701.SubnetResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
