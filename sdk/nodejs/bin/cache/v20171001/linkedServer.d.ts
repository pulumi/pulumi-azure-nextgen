import * as pulumi from "@pulumi/pulumi";
/**
 * Response to put/get linked server (with properties) for Redis cache.
 */
export declare class LinkedServer extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LinkedServer;
    /**
     * Returns true if the given object is an instance of LinkedServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServer;
    /**
     * Fully qualified resourceId of the linked redis cache.
     */
    readonly linkedRedisCacheId: pulumi.Output<string>;
    /**
     * Location of the linked redis cache.
     */
    readonly linkedRedisCacheLocation: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Terminal state of the link between primary and secondary redis cache.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Role of the linked server.
     */
    readonly serverRole: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a LinkedServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LinkedServer resource.
 */
export interface LinkedServerArgs {
    /**
     * Fully qualified resourceId of the linked redis cache.
     */
    readonly linkedRedisCacheId: pulumi.Input<string>;
    /**
     * Location of the linked redis cache.
     */
    readonly linkedRedisCacheLocation: pulumi.Input<string>;
    /**
     * The name of the linked server that is being added to the Redis cache.
     */
    readonly linkedServerName: pulumi.Input<string>;
    /**
     * The name of the Redis cache.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Role of the linked server.
     */
    readonly serverRole: pulumi.Input<string>;
}
