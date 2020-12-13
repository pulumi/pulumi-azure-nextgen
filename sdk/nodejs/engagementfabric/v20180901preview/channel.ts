// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * The EngagementFabric channel
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
    public static readonly __pulumiType = 'azure-nextgen:engagementfabric/v20180901preview:Channel';

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
     * The functions to be enabled for the channel
     */
    public readonly channelFunctions!: pulumi.Output<string[] | undefined>;
    /**
     * The channel type
     */
    public readonly channelType!: pulumi.Output<string>;
    /**
     * The channel credentials
     */
    public readonly credentials!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The fully qualified type of the resource
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
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.channelName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'channelName'");
            }
            if ((!args || args.channelType === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'channelType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["channelFunctions"] = args ? args.channelFunctions : undefined;
            inputs["channelName"] = args ? args.channelName : undefined;
            inputs["channelType"] = args ? args.channelType : undefined;
            inputs["credentials"] = args ? args.credentials : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["channelFunctions"] = undefined /*out*/;
            inputs["channelType"] = undefined /*out*/;
            inputs["credentials"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Channel.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Channel resource.
 */
export interface ChannelArgs {
    /**
     * Account Name
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The functions to be enabled for the channel
     */
    readonly channelFunctions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Channel Name
     */
    readonly channelName: pulumi.Input<string>;
    /**
     * The channel type
     */
    readonly channelType: pulumi.Input<string>;
    /**
     * The channel credentials
     */
    readonly credentials?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
