// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The Live Event.
 */
export class LiveEvent extends pulumi.CustomResource {
    /**
     * Get an existing LiveEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LiveEvent {
        return new LiveEvent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:media/v20190501preview:LiveEvent';

    /**
     * Returns true if the given object is an instance of LiveEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LiveEvent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LiveEvent.__pulumiType;
    }

    /**
     * The exact time the Live Event was created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The Live Event access policies.
     */
    public readonly crossSiteAccessPolicies!: pulumi.Output<outputs.media.v20190501preview.CrossSiteAccessPoliciesResponse | undefined>;
    /**
     * The Live Event description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Live Event encoding.
     */
    public readonly encoding!: pulumi.Output<outputs.media.v20190501preview.LiveEventEncodingResponse | undefined>;
    /**
     * The Live Event input.
     */
    public readonly input!: pulumi.Output<outputs.media.v20190501preview.LiveEventInputResponse>;
    /**
     * The exact time the Live Event was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The Azure Region of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Live Event preview.
     */
    public readonly preview!: pulumi.Output<outputs.media.v20190501preview.LiveEventPreviewResponse | undefined>;
    /**
     * The provisioning state of the Live Event.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource state of the Live Event.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
     */
    public readonly streamOptions!: pulumi.Output<string[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Live Event transcription.
     */
    public readonly transcriptions!: pulumi.Output<outputs.media.v20190501preview.LiveEventTranscriptionResponse[] | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.
     */
    public readonly vanityUrl!: pulumi.Output<boolean | undefined>;

    /**
     * Create a LiveEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveEventArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.input === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'input'");
            }
            if ((!args || args.liveEventName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'liveEventName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["autoStart"] = args ? args.autoStart : undefined;
            inputs["crossSiteAccessPolicies"] = args ? args.crossSiteAccessPolicies : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["encoding"] = args ? args.encoding : undefined;
            inputs["input"] = args ? args.input : undefined;
            inputs["liveEventName"] = args ? args.liveEventName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["preview"] = args ? args.preview : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["streamOptions"] = args ? args.streamOptions : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["transcriptions"] = args ? args.transcriptions : undefined;
            inputs["vanityUrl"] = args ? args.vanityUrl : undefined;
            inputs["created"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["resourceState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["created"] = undefined /*out*/;
            inputs["crossSiteAccessPolicies"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["encoding"] = undefined /*out*/;
            inputs["input"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["preview"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["resourceState"] = undefined /*out*/;
            inputs["streamOptions"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["transcriptions"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["vanityUrl"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:media/latest:LiveEvent" }, { type: "azure-nextgen:media/v20180330preview:LiveEvent" }, { type: "azure-nextgen:media/v20180601preview:LiveEvent" }, { type: "azure-nextgen:media/v20180701:LiveEvent" }, { type: "azure-nextgen:media/v20200501:LiveEvent" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(LiveEvent.__pulumiType, name, inputs, opts);
    }
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
    readonly crossSiteAccessPolicies?: pulumi.Input<inputs.media.v20190501preview.CrossSiteAccessPolicies>;
    /**
     * The Live Event description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Live Event encoding.
     */
    readonly encoding?: pulumi.Input<inputs.media.v20190501preview.LiveEventEncoding>;
    /**
     * The Live Event input.
     */
    readonly input: pulumi.Input<inputs.media.v20190501preview.LiveEventInput>;
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
    readonly preview?: pulumi.Input<inputs.media.v20190501preview.LiveEventPreview>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
     */
    readonly streamOptions?: pulumi.Input<pulumi.Input<string | enums.media.v20190501preview.StreamOptionsFlag>[]>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Live Event transcription.
     */
    readonly transcriptions?: pulumi.Input<pulumi.Input<inputs.media.v20190501preview.LiveEventTranscription>[]>;
    /**
     * Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.
     */
    readonly vanityUrl?: pulumi.Input<boolean>;
}
