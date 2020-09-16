import * as pulumi from "@pulumi/pulumi";
/**
 * Contains information about an application in a Batch account.
 */
export declare class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Application;
    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Application;
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string.
     */
    readonly allowUpdates: pulumi.Output<boolean | undefined>;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    readonly defaultVersion: pulumi.Output<string | undefined>;
    /**
     * The display name for the application.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string.
     */
    readonly allowUpdates?: pulumi.Input<boolean>;
    /**
     * The name of the application. This must be unique within the account.
     */
    readonly applicationName: pulumi.Input<string>;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    readonly defaultVersion?: pulumi.Input<string>;
    /**
     * The display name for the application.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
