import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The StreamingEndpoint.
 */
export declare class StreamingEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing StreamingEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StreamingEndpoint;
    /**
     * Returns true if the given object is an instance of StreamingEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StreamingEndpoint;
    /**
     * The access control definition of the StreamingEndpoint.
     */
    readonly accessControl: pulumi.Output<outputs.media.v20200501.StreamingEndpointAccessControlResponse | undefined>;
    /**
     * The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming.  This value can only be set at creation time.
     */
    readonly availabilitySetName: pulumi.Output<string | undefined>;
    /**
     * The CDN enabled flag.
     */
    readonly cdnEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The CDN profile name.
     */
    readonly cdnProfile: pulumi.Output<string | undefined>;
    /**
     * The CDN provider name.
     */
    readonly cdnProvider: pulumi.Output<string | undefined>;
    /**
     * The exact time the StreamingEndpoint was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * The StreamingEndpoint access policies.
     */
    readonly crossSiteAccessPolicies: pulumi.Output<outputs.media.v20200501.CrossSiteAccessPoliciesResponse | undefined>;
    /**
     * The custom host names of the StreamingEndpoint
     */
    readonly customHostNames: pulumi.Output<string[] | undefined>;
    /**
     * The StreamingEndpoint description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The free trial expiration time.
     */
    readonly freeTrialEndTime: pulumi.Output<string>;
    /**
     * The StreamingEndpoint host name.
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * The exact time the StreamingEndpoint was last modified.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Output<string>;
    /**
     * Max cache age
     */
    readonly maxCacheAge: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the StreamingEndpoint.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource state of the StreamingEndpoint.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * The number of scale units.  Use the Scale operation to adjust this value.
     */
    readonly scaleUnits: pulumi.Output<number>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a StreamingEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingEndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StreamingEndpoint resource.
 */
export interface StreamingEndpointArgs {
    /**
     * The access control definition of the StreamingEndpoint.
     */
    readonly accessControl?: pulumi.Input<inputs.media.v20200501.StreamingEndpointAccessControl>;
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The flag indicates if the resource should be automatically started on creation.
     */
    readonly autoStart?: pulumi.Input<boolean>;
    /**
     * The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming.  This value can only be set at creation time.
     */
    readonly availabilitySetName?: pulumi.Input<string>;
    /**
     * The CDN enabled flag.
     */
    readonly cdnEnabled?: pulumi.Input<boolean>;
    /**
     * The CDN profile name.
     */
    readonly cdnProfile?: pulumi.Input<string>;
    /**
     * The CDN provider name.
     */
    readonly cdnProvider?: pulumi.Input<string>;
    /**
     * The StreamingEndpoint access policies.
     */
    readonly crossSiteAccessPolicies?: pulumi.Input<inputs.media.v20200501.CrossSiteAccessPolicies>;
    /**
     * The custom host names of the StreamingEndpoint
     */
    readonly customHostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The StreamingEndpoint description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * Max cache age
     */
    readonly maxCacheAge?: pulumi.Input<number>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The number of scale units.  Use the Scale operation to adjust this value.
     */
    readonly scaleUnits: pulumi.Input<number>;
    /**
     * The name of the StreamingEndpoint.
     */
    readonly streamingEndpointName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
