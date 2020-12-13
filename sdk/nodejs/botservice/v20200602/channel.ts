// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Bot channel resource definition
 */
export class Channel extends pulumi.CustomResource {
    /**
     * Get an existing Channel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Channel {
        return new Channel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:botservice/v20200602:Channel';

    /**
     * Returns true if the given object is an instance of Channel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Channel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Channel.__pulumiType;
    }

    /**
     * Entity Tag
     */
    public readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The set of properties specific to bot channel resource
     */
    public readonly properties!: pulumi.Output<outputs.botservice.v20200602.AlexaChannelResponse | outputs.botservice.v20200602.DirectLineChannelResponse | outputs.botservice.v20200602.DirectLineSpeechChannelResponse | outputs.botservice.v20200602.EmailChannelResponse | outputs.botservice.v20200602.FacebookChannelResponse | outputs.botservice.v20200602.KikChannelResponse | outputs.botservice.v20200602.LineChannelResponse | outputs.botservice.v20200602.MsTeamsChannelResponse | outputs.botservice.v20200602.SkypeChannelResponse | outputs.botservice.v20200602.SlackChannelResponse | outputs.botservice.v20200602.SmsChannelResponse | outputs.botservice.v20200602.TelegramChannelResponse | outputs.botservice.v20200602.WebChatChannelResponse>;
    /**
     * Gets or sets the SKU of the resource.
     */
    public readonly sku!: pulumi.Output<outputs.botservice.v20200602.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Channel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.channelName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'channelName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            inputs["channelName"] = args ? args.channelName : undefined;
            inputs["etag"] = args ? args.etag : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["etag"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:botservice/latest:Channel" }, { type: "azure-nextgen:botservice/v20171201:Channel" }, { type: "azure-nextgen:botservice/v20180712:Channel" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Channel.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Channel resource.
 */
export interface ChannelArgs {
    /**
     * The name of the Channel resource.
     */
    readonly channelName: pulumi.Input<string>;
    /**
     * Entity Tag
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind?: pulumi.Input<string | enums.botservice.v20200602.Kind>;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly properties?: pulumi.Input<inputs.botservice.v20200602.AlexaChannel | inputs.botservice.v20200602.DirectLineChannel | inputs.botservice.v20200602.DirectLineSpeechChannel | inputs.botservice.v20200602.EmailChannel | inputs.botservice.v20200602.FacebookChannel | inputs.botservice.v20200602.KikChannel | inputs.botservice.v20200602.LineChannel | inputs.botservice.v20200602.MsTeamsChannel | inputs.botservice.v20200602.SkypeChannel | inputs.botservice.v20200602.SlackChannel | inputs.botservice.v20200602.SmsChannel | inputs.botservice.v20200602.TelegramChannel | inputs.botservice.v20200602.WebChatChannel>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: pulumi.Input<inputs.botservice.v20200602.Sku>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
