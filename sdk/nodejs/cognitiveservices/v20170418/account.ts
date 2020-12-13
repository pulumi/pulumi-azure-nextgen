// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:cognitiveservices/v20170418:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * Entity Tag
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The identity of Cognitive Services account.
     */
    public readonly identity!: pulumi.Output<outputs.cognitiveservices.v20170418.IdentityResponse | undefined>;
    /**
     * The Kind of the resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The location of the resource
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the created account
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of Cognitive Services account.
     */
    public readonly properties!: pulumi.Output<outputs.cognitiveservices.v20170418.CognitiveServicesAccountPropertiesResponse>;
    /**
     * The SKU of Cognitive Services account.
     */
    public readonly sku!: pulumi.Output<outputs.cognitiveservices.v20170418.SkuResponse | undefined>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["etag"] = undefined /*out*/;
            inputs["identity"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-nextgen:cognitiveservices/latest:Account" }, { type: "azure-nextgen:cognitiveservices/v20160201preview:Account" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Account.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of Cognitive Services account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The identity of Cognitive Services account.
     */
    readonly identity?: pulumi.Input<inputs.cognitiveservices.v20170418.Identity>;
    /**
     * The Kind of the resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The location of the resource
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services account.
     */
    readonly properties?: pulumi.Input<inputs.cognitiveservices.v20170418.CognitiveServicesAccountProperties>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of Cognitive Services account.
     */
    readonly sku?: pulumi.Input<inputs.cognitiveservices.v20170418.Sku>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
