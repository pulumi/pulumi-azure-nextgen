import * as pulumi from "@pulumi/pulumi";
/**
 * CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.
 */
export declare class Origin extends pulumi.CustomResource {
    /**
     * Get an existing Origin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Origin;
    /**
     * Returns true if the given object is an instance of Origin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Origin;
    /**
     * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    readonly httpPort: pulumi.Output<number | undefined>;
    /**
     * The value of the https port. Must be between 1 and 65535.
     */
    readonly httpsPort: pulumi.Output<number | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning status of the origin.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Resource status of the origin.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Origin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OriginArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Origin resource.
 */
export interface OriginArgs {
    /**
     * Name of the endpoint within the CDN profile.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.
     */
    readonly hostName: pulumi.Input<string>;
    /**
     * The value of the HTTP port. Must be between 1 and 65535.
     */
    readonly httpPort?: pulumi.Input<number>;
    /**
     * The value of the HTTPS port. Must be between 1 and 65535.
     */
    readonly httpsPort?: pulumi.Input<number>;
    /**
     * Name of the origin, an arbitrary value but it needs to be unique under endpoint
     */
    readonly originName: pulumi.Input<string>;
    /**
     * Name of the CDN profile within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
