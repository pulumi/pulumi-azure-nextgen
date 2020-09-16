import * as pulumi from "@pulumi/pulumi";
/**
 * Dedicated cloud service model
 */
export declare class DedicatedCloudService extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedCloudService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedCloudService;
    /**
     * Returns true if the given object is an instance of DedicatedCloudService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DedicatedCloudService;
    /**
     * gateway Subnet for the account. It will collect the subnet address and always treat it as /28
     */
    readonly gatewaySubnet: pulumi.Output<string>;
    /**
     * indicates whether account onboarded or not in a given region
     */
    readonly isAccountOnboarded: pulumi.Output<string>;
    /**
     * Azure region
     */
    readonly location: pulumi.Output<string>;
    /**
     * {dedicatedCloudServiceName}
     */
    readonly name: pulumi.Output<string>;
    /**
     * total nodes purchased
     */
    readonly nodes: pulumi.Output<number>;
    /**
     * link to a service management web portal
     */
    readonly serviceURL: pulumi.Output<string>;
    /**
     * The list of tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DedicatedCloudService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedCloudServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DedicatedCloudService resource.
 */
export interface DedicatedCloudServiceArgs {
    /**
     * dedicated cloud Service name
     */
    readonly dedicatedCloudServiceName: pulumi.Input<string>;
    /**
     * gateway Subnet for the account. It will collect the subnet address and always treat it as /28
     */
    readonly gatewaySubnet: pulumi.Input<string>;
    /**
     * Azure region
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The list of tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
