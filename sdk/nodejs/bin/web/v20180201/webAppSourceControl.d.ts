import * as pulumi from "@pulumi/pulumi";
/**
 * Source control configuration for an app.
 */
export declare class WebAppSourceControl extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSourceControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSourceControl;
    /**
     * Returns true if the given object is an instance of WebAppSourceControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppSourceControl;
    /**
     * Name of branch to use for deployment.
     */
    readonly branch: pulumi.Output<string | undefined>;
    /**
     * <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
     */
    readonly deploymentRollbackEnabled: pulumi.Output<boolean | undefined>;
    /**
     * <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
     */
    readonly isManualIntegration: pulumi.Output<boolean | undefined>;
    /**
     * <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
     */
    readonly isMercurial: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Repository or source control URL.
     */
    readonly repoUrl: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebAppSourceControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSourceControlArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppSourceControl resource.
 */
export interface WebAppSourceControlArgs {
    /**
     * Name of branch to use for deployment.
     */
    readonly branch?: pulumi.Input<string>;
    /**
     * <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
     */
    readonly deploymentRollbackEnabled?: pulumi.Input<boolean>;
    /**
     * <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
     */
    readonly isManualIntegration?: pulumi.Input<boolean>;
    /**
     * <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
     */
    readonly isMercurial?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Repository or source control URL.
     */
    readonly repoUrl?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
