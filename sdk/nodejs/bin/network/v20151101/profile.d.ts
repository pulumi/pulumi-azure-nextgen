import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Class representing a Traffic Manager profile.
 */
export declare class Profile extends pulumi.CustomResource {
    /**
     * Get an existing Profile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Profile;
    /**
     * Returns true if the given object is an instance of Profile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Profile;
    /**
     * Gets or sets the DNS settings of the Traffic Manager profile.
     */
    readonly dnsConfig: pulumi.Output<outputs.network.v20151101.DnsConfigResponse | undefined>;
    /**
     * Gets or sets the list of endpoints in the Traffic Manager profile.
     */
    readonly endpoints: pulumi.Output<outputs.network.v20151101.EndpointResponse[] | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
     */
    readonly monitorConfig: pulumi.Output<outputs.network.v20151101.MonitorConfigResponse | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
     */
    readonly profileStatus: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
     */
    readonly trafficRoutingMethod: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Profile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfileArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Profile resource.
 */
export interface ProfileArgs {
    /**
     * Gets or sets the DNS settings of the Traffic Manager profile.
     */
    readonly dnsConfig?: pulumi.Input<inputs.network.v20151101.DnsConfig>;
    /**
     * Gets or sets the list of endpoints in the Traffic Manager profile.
     */
    readonly endpoints?: pulumi.Input<pulumi.Input<inputs.network.v20151101.Endpoint>[]>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets the endpoint monitoring settings of the Traffic Manager profile.
     */
    readonly monitorConfig?: pulumi.Input<inputs.network.v20151101.MonitorConfig>;
    /**
     * The name of the Traffic Manager profile.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Gets or sets the status of the Traffic Manager profile.  Possible values are 'Enabled' and 'Disabled'.
     */
    readonly profileStatus?: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Traffic Manager profile.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are 'Performance', 'Weighted', or 'Priority'.
     */
    readonly trafficRoutingMethod?: pulumi.Input<string>;
}
