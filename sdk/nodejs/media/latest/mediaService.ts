// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A Media Services account.
 */
export class MediaService extends pulumi.CustomResource {
    /**
     * Get an existing MediaService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MediaService {
        return new MediaService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:media/latest:MediaService';

    /**
     * Returns true if the given object is an instance of MediaService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaService.__pulumiType;
    }

    /**
     * The account encryption properties.
     */
    public readonly encryption!: pulumi.Output<outputs.media.latest.AccountEncryptionResponse | undefined>;
    /**
     * The Managed Identity for the Media Services account.
     */
    public readonly identity!: pulumi.Output<outputs.media.latest.MediaServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The Media Services account ID.
     */
    public /*out*/ readonly mediaServiceId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The storage accounts for this resource.
     */
    public readonly storageAccounts!: pulumi.Output<outputs.media.latest.StorageAccountResponse[] | undefined>;
    public readonly storageAuthentication!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MediaService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["encryption"] = args ? args.encryption : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            inputs["storageAuthentication"] = args ? args.storageAuthentication : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["mediaServiceId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["encryption"] = undefined /*out*/;
            inputs["identity"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["mediaServiceId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["storageAccounts"] = undefined /*out*/;
            inputs["storageAuthentication"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:media/v20151001:MediaService" }, { type: "azure-nextgen:media/v20180330preview:MediaService" }, { type: "azure-nextgen:media/v20180601preview:MediaService" }, { type: "azure-nextgen:media/v20180701:MediaService" }, { type: "azure-nextgen:media/v20200501:MediaService" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(MediaService.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a MediaService resource.
 */
export interface MediaServiceArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The account encryption properties.
     */
    readonly encryption?: pulumi.Input<inputs.media.latest.AccountEncryption>;
    /**
     * The Managed Identity for the Media Services account.
     */
    readonly identity?: pulumi.Input<inputs.media.latest.MediaServiceIdentity>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The storage accounts for this resource.
     */
    readonly storageAccounts?: pulumi.Input<pulumi.Input<inputs.media.latest.StorageAccount>[]>;
    readonly storageAuthentication?: pulumi.Input<string | enums.media.latest.StorageAuthentication>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
