import * as pulumi from "@pulumi/pulumi";
/**
 * Service Endpoint policy definitions.
 */
export declare class ServiceEndpointPolicyDefinition extends pulumi.CustomResource {
    /**
     * Get an existing ServiceEndpointPolicyDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceEndpointPolicyDefinition;
    /**
     * Returns true if the given object is an instance of ServiceEndpointPolicyDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServiceEndpointPolicyDefinition;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * service endpoint name.
     */
    readonly service: pulumi.Output<string | undefined>;
    /**
     * A list of service resources.
     */
    readonly serviceResources: pulumi.Output<string[] | undefined>;
    /**
     * Create a ServiceEndpointPolicyDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceEndpointPolicyDefinitionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServiceEndpointPolicyDefinition resource.
 */
export interface ServiceEndpointPolicyDefinitionArgs {
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * service endpoint name.
     */
    readonly service?: pulumi.Input<string>;
    /**
     * The name of the service endpoint policy definition name.
     */
    readonly serviceEndpointPolicyDefinitionName: pulumi.Input<string>;
    /**
     * The name of the service endpoint policy.
     */
    readonly serviceEndpointPolicyName: pulumi.Input<string>;
    /**
     * A list of service resources.
     */
    readonly serviceResources?: pulumi.Input<pulumi.Input<string>[]>;
}
