import * as pulumi from "@pulumi/pulumi";
/**
 * An application type version resource for the specified application type name resource.
 */
export declare class ApplicationTypeVersion extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationTypeVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationTypeVersion;
    /**
     * Returns true if the given object is an instance of ApplicationTypeVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApplicationTypeVersion;
    /**
     * The URL to the application package
     */
    readonly appPackageUrl: pulumi.Output<string>;
    /**
     * List of application type parameters that can be overridden when creating or updating the application.
     */
    readonly defaultParameterList: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Azure resource etag.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Azure resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Azure resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ApplicationTypeVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationTypeVersionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApplicationTypeVersion resource.
 */
export interface ApplicationTypeVersionArgs {
    /**
     * The URL to the application package
     */
    readonly appPackageUrl: pulumi.Input<string>;
    /**
     * The name of the application type name resource.
     */
    readonly applicationTypeName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The application type version.
     */
    readonly version: pulumi.Input<string>;
}
