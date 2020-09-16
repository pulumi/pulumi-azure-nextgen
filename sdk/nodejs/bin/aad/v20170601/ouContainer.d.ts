import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Resource for OuContainer.
 */
export declare class OuContainer extends pulumi.CustomResource {
    /**
     * Get an existing OuContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OuContainer;
    /**
     * Returns true if the given object is an instance of OuContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OuContainer;
    /**
     * The list of container accounts
     */
    readonly accounts: pulumi.Output<outputs.aad.v20170601.ContainerAccountResponse[] | undefined>;
    /**
     * The OuContainer name
     */
    readonly containerId: pulumi.Output<string>;
    /**
     * The Deployment id
     */
    readonly deploymentId: pulumi.Output<string>;
    /**
     * The domain name of Domain Services.
     */
    readonly domainName: pulumi.Output<string>;
    /**
     * Resource etag
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Status of OuContainer instance
     */
    readonly serviceStatus: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure Active Directory tenant id
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a OuContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OuContainerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a OuContainer resource.
 */
export interface OuContainerArgs {
    /**
     * The account name
     */
    readonly accountName?: pulumi.Input<string>;
    /**
     * The name of the domain service.
     */
    readonly domainServiceName: pulumi.Input<string>;
    /**
     * The name of the OuContainer.
     */
    readonly ouContainerName: pulumi.Input<string>;
    /**
     * The account password
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The account spn
     */
    readonly spn?: pulumi.Input<string>;
}
