import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The Live Event.
 */
export declare class LiveEvent extends pulumi.CustomResource {
    /**
     * Get an existing LiveEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LiveEvent;
    /**
     * Returns true if the given object is an instance of LiveEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LiveEvent;
    /**
     * The exact time the Live Event was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * The Live Event access policies.
     */
    readonly crossSiteAccessPolicies: pulumi.Output<outputs.media.v20180701.CrossSiteAccessPoliciesResponse | undefined>;
    /**
     * The Live Event description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Live Event encoding.
     */
    readonly encoding: pulumi.Output<outputs.media.v20180701.LiveEventEncodingResponse | undefined>;
    /**
     * The Live Event input.
     */
    readonly input: pulumi.Output<outputs.media.v20180701.LiveEventInputResponse>;
    /**
     * The exact time the Live Event was last modified.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The Azure Region of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Live Event preview.
     */
    readonly preview: pulumi.Output<outputs.media.v20180701.LiveEventPreviewResponse | undefined>;
    /**
     * The provisioning state of the Live Event.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource state of the Live Event.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
     */
    readonly streamOptions: pulumi.Output<string[] | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.
     */
    readonly vanityUrl: pulumi.Output<boolean | undefined>;
    /**
     * Create a LiveEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveEventArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LiveEvent resource.
 */
export interface LiveEventArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The flag indicates if the resource should be automatically started on creation.
     */
    readonly autoStart?: pulumi.Input<boolean>;
    /**
     * The Live Event access policies.
     */
    readonly crossSiteAccessPolicies?: pulumi.Input<inputs.media.v20180701.CrossSiteAccessPolicies>;
    /**
     * The Live Event description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Live Event encoding.
     */
    readonly encoding?: pulumi.Input<inputs.media.v20180701.LiveEventEncoding>;
    /**
     * The Live Event input.
     */
    readonly input: pulumi.Input<inputs.media.v20180701.LiveEventInput>;
    /**
     * The name of the Live Event.
     */
    readonly liveEventName: pulumi.Input<string>;
    /**
     * The Azure Region of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The Live Event preview.
     */
    readonly preview?: pulumi.Input<inputs.media.v20180701.LiveEventPreview>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
     */
    readonly streamOptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.
     */
    readonly vanityUrl?: pulumi.Input<boolean>;
}
