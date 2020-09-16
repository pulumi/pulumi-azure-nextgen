import * as pulumi from "@pulumi/pulumi";
/**
 * An application package which represents a particular version of an application.
 */
export declare class ApplicationPackage extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationPackage;
    /**
     * Returns true if the given object is an instance of ApplicationPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApplicationPackage;
    /**
     * The format of the application package, if the package is active.
     */
    readonly format: pulumi.Output<string>;
    /**
     * The time at which the package was last activated, if the package is active.
     */
    readonly lastActivationTime: pulumi.Output<string>;
    /**
     * The current state of the application package.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The URL for the application package in Azure Storage.
     */
    readonly storageUrl: pulumi.Output<string>;
    /**
     * The UTC time at which the Azure Storage URL will expire.
     */
    readonly storageUrlExpiry: pulumi.Output<string>;
    /**
     * The version of the application package.
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a ApplicationPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationPackageArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApplicationPackage resource.
 */
export interface ApplicationPackageArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The ID of the application.
     */
    readonly applicationId: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The version of the application.
     */
    readonly version: pulumi.Input<string>;
}
