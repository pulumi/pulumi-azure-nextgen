import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of an artifact source.
 */
export declare class ArtifactSource extends pulumi.CustomResource {
    /**
     * Get an existing ArtifactSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ArtifactSource;
    /**
     * Returns true if the given object is an instance of ArtifactSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ArtifactSource;
    /**
     * The folder containing Azure Resource Manager templates.
     */
    readonly armTemplateFolderPath: pulumi.Output<string | undefined>;
    /**
     * The artifact source's branch reference.
     */
    readonly branchRef: pulumi.Output<string | undefined>;
    /**
     * The artifact source's creation date.
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * The artifact source's display name.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The folder containing artifacts.
     */
    readonly folderPath: pulumi.Output<string | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The security token to authenticate to the artifact source.
     */
    readonly securityToken: pulumi.Output<string | undefined>;
    /**
     * The artifact source's type.
     */
    readonly sourceType: pulumi.Output<string | undefined>;
    /**
     * Indicates if the artifact source is enabled (values: Enabled, Disabled).
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string | undefined>;
    /**
     * The artifact source's URI.
     */
    readonly uri: pulumi.Output<string | undefined>;
    /**
     * Create a ArtifactSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArtifactSourceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ArtifactSource resource.
 */
export interface ArtifactSourceArgs {
    /**
     * The folder containing Azure Resource Manager templates.
     */
    readonly armTemplateFolderPath?: pulumi.Input<string>;
    /**
     * The artifact source's branch reference.
     */
    readonly branchRef?: pulumi.Input<string>;
    /**
     * The artifact source's display name.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The folder containing artifacts.
     */
    readonly folderPath?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the artifact source.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The security token to authenticate to the artifact source.
     */
    readonly securityToken?: pulumi.Input<string>;
    /**
     * The artifact source's type.
     */
    readonly sourceType?: pulumi.Input<string>;
    /**
     * Indicates if the artifact source is enabled (values: Enabled, Disabled).
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: pulumi.Input<string>;
    /**
     * The artifact source's URI.
     */
    readonly uri?: pulumi.Input<string>;
}
