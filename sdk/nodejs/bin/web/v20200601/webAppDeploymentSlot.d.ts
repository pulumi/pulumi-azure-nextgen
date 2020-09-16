import * as pulumi from "@pulumi/pulumi";
/**
 * User credentials used for publishing activity.
 */
export declare class WebAppDeploymentSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDeploymentSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDeploymentSlot;
    /**
     * Returns true if the given object is an instance of WebAppDeploymentSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppDeploymentSlot;
    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    readonly active: pulumi.Output<boolean | undefined>;
    /**
     * Who authored the deployment.
     */
    readonly author: pulumi.Output<string | undefined>;
    /**
     * Author email.
     */
    readonly authorEmail: pulumi.Output<string | undefined>;
    /**
     * Who performed the deployment.
     */
    readonly deployer: pulumi.Output<string | undefined>;
    /**
     * Details on deployment.
     */
    readonly details: pulumi.Output<string | undefined>;
    /**
     * End time.
     */
    readonly endTime: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Details about deployment status.
     */
    readonly message: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Start time.
     */
    readonly startTime: pulumi.Output<string | undefined>;
    /**
     * Deployment status.
     */
    readonly status: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebAppDeploymentSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDeploymentSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppDeploymentSlot resource.
 */
export interface WebAppDeploymentSlotArgs {
    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    readonly active?: pulumi.Input<boolean>;
    /**
     * Who authored the deployment.
     */
    readonly author?: pulumi.Input<string>;
    /**
     * Author email.
     */
    readonly authorEmail?: pulumi.Input<string>;
    /**
     * Who performed the deployment.
     */
    readonly deployer?: pulumi.Input<string>;
    /**
     * Details on deployment.
     */
    readonly details?: pulumi.Input<string>;
    /**
     * End time.
     */
    readonly endTime?: pulumi.Input<string>;
    /**
     * ID of an existing deployment.
     */
    readonly id: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Details about deployment status.
     */
    readonly message?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API creates a deployment for the production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Start time.
     */
    readonly startTime?: pulumi.Input<string>;
    /**
     * Deployment status.
     */
    readonly status?: pulumi.Input<number>;
}
