import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An Asset Filter.
 */
export declare class AssetFilter extends pulumi.CustomResource {
    /**
     * Get an existing AssetFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AssetFilter;
    /**
     * Returns true if the given object is an instance of AssetFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AssetFilter;
    /**
     * The first quality.
     */
    readonly firstQuality: pulumi.Output<outputs.media.v20200501.FirstQualityResponse | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The presentation time range.
     */
    readonly presentationTimeRange: pulumi.Output<outputs.media.v20200501.PresentationTimeRangeResponse | undefined>;
    /**
     * The tracks selection conditions.
     */
    readonly tracks: pulumi.Output<outputs.media.v20200501.FilterTrackSelectionResponse[] | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a AssetFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssetFilterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AssetFilter resource.
 */
export interface AssetFilterArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    readonly assetName: pulumi.Input<string>;
    /**
     * The Asset Filter name
     */
    readonly filterName: pulumi.Input<string>;
    /**
     * The first quality.
     */
    readonly firstQuality?: pulumi.Input<inputs.media.v20200501.FirstQuality>;
    /**
     * The presentation time range.
     */
    readonly presentationTimeRange?: pulumi.Input<inputs.media.v20200501.PresentationTimeRange>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tracks selection conditions.
     */
    readonly tracks?: pulumi.Input<pulumi.Input<inputs.media.v20200501.FilterTrackSelection>[]>;
}
