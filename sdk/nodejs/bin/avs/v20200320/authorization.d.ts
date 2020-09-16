import * as pulumi from "@pulumi/pulumi";
/**
 * ExpressRoute Circuit Authorization
 */
export declare class Authorization extends pulumi.CustomResource {
    /**
     * Get an existing Authorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Authorization;
    /**
     * Returns true if the given object is an instance of Authorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Authorization;
    /**
     * The ID of the ExpressRoute Circuit Authorization
     */
    readonly expressRouteAuthorizationId: pulumi.Output<string>;
    /**
     * The key of the ExpressRoute Circuit Authorization
     */
    readonly expressRouteAuthorizationKey: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The state of the  ExpressRoute Circuit Authorization provisioning
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Authorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Authorization resource.
 */
export interface AuthorizationArgs {
    /**
     * Name of the ExpressRoute Circuit Authorization in the private cloud
     */
    readonly authorizationName: pulumi.Input<string>;
    /**
     * The name of the private cloud.
     */
    readonly privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
