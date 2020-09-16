import * as pulumi from "@pulumi/pulumi";
/**
 * Hybrid Connection for an App Service app.
 */
export declare class WebAppRelayServiceConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebAppRelayServiceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppRelayServiceConnection;
    /**
     * Returns true if the given object is an instance of WebAppRelayServiceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppRelayServiceConnection;
    readonly biztalkUri: pulumi.Output<string | undefined>;
    readonly entityConnectionString: pulumi.Output<string | undefined>;
    readonly entityName: pulumi.Output<string | undefined>;
    readonly hostname: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    readonly port: pulumi.Output<number | undefined>;
    readonly resourceConnectionString: pulumi.Output<string | undefined>;
    readonly resourceType: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebAppRelayServiceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppRelayServiceConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppRelayServiceConnection resource.
 */
export interface WebAppRelayServiceConnectionArgs {
    readonly biztalkUri?: pulumi.Input<string>;
    readonly entityConnectionString?: pulumi.Input<string>;
    readonly entityName: pulumi.Input<string>;
    readonly hostname?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    readonly port?: pulumi.Input<number>;
    readonly resourceConnectionString?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    readonly resourceType?: pulumi.Input<string>;
}
