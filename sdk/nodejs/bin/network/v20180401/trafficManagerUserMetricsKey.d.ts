import * as pulumi from "@pulumi/pulumi";
/**
 * Class representing Traffic Manager User Metrics.
 */
export declare class TrafficManagerUserMetricsKey extends pulumi.CustomResource {
    /**
     * Get an existing TrafficManagerUserMetricsKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TrafficManagerUserMetricsKey;
    /**
     * Returns true if the given object is an instance of TrafficManagerUserMetricsKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TrafficManagerUserMetricsKey;
    /**
     * The key returned by the User Metrics operation.
     */
    readonly key: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a TrafficManagerUserMetricsKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TrafficManagerUserMetricsKeyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a TrafficManagerUserMetricsKey resource.
 */
export interface TrafficManagerUserMetricsKeyArgs {
}
