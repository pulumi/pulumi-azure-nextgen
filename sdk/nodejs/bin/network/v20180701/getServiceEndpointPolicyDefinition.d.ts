import * as pulumi from "@pulumi/pulumi";
export declare function getServiceEndpointPolicyDefinition(args: GetServiceEndpointPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointPolicyDefinitionResult>;
export interface GetServiceEndpointPolicyDefinitionArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the service endpoint policy definition name.
     */
    readonly serviceEndpointPolicyDefinitionName: string;
    /**
     * The name of the service endpoint policy name.
     */
    readonly serviceEndpointPolicyName: string;
}
/**
 * Service Endpoint policy definitions.
 */
export interface GetServiceEndpointPolicyDefinitionResult {
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * service endpoint name.
     */
    readonly service?: string;
    /**
     * A list of service resources.
     */
    readonly serviceResources?: string[];
}
