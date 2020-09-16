import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The Live Output.
 */
export declare class LiveOutput extends pulumi.CustomResource {
    /**
     * Get an existing LiveOutput resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LiveOutput;
    /**
     * Returns true if the given object is an instance of LiveOutput.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LiveOutput;
    /**
     * ISO 8601 timespan duration of the archive window length. This is duration that customer want to retain the recorded content.
     */
    readonly archiveWindowLength: pulumi.Output<string>;
    /**
     * The asset name.
     */
    readonly assetName: pulumi.Output<string>;
    /**
     * The exact time the Live Output was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * The description of the Live Output.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The HLS configuration.
     */
    readonly hls: pulumi.Output<outputs.media.v20200501.HlsResponse | undefined>;
    /**
     * The exact time the Live Output was last modified.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The manifest file name.  If not provided, the service will generate one automatically.
     */
    readonly manifestName: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The output snapshot time.
     */
    readonly outputSnapTime: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the Live Output.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource state of the Live Output.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a LiveOutput resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveOutputArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LiveOutput resource.
 */
export interface LiveOutputArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * ISO 8601 timespan duration of the archive window length. This is duration that customer want to retain the recorded content.
     */
    readonly archiveWindowLength: pulumi.Input<string>;
    /**
     * The asset name.
     */
    readonly assetName: pulumi.Input<string>;
    /**
     * The description of the Live Output.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The HLS configuration.
     */
    readonly hls?: pulumi.Input<inputs.media.v20200501.Hls>;
    /**
     * The name of the Live Event.
     */
    readonly liveEventName: pulumi.Input<string>;
    /**
     * The name of the Live Output.
     */
    readonly liveOutputName: pulumi.Input<string>;
    /**
     * The manifest file name.  If not provided, the service will generate one automatically.
     */
    readonly manifestName?: pulumi.Input<string>;
    /**
     * The output snapshot time.
     */
    readonly outputSnapTime?: pulumi.Input<number>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
