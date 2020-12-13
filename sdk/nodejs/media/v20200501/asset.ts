// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * An Asset.
 */
export class Asset extends pulumi.CustomResource {
    /**
     * Get an existing Asset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Asset {
        return new Asset(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:media/v20200501:Asset';

    /**
     * Returns true if the given object is an instance of Asset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Asset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Asset.__pulumiType;
    }

    /**
     * The alternate ID of the Asset.
     */
    public readonly alternateId!: pulumi.Output<string | undefined>;
    /**
     * The Asset ID.
     */
    public /*out*/ readonly assetId!: pulumi.Output<string>;
    /**
     * The name of the asset blob container.
     */
    public readonly container!: pulumi.Output<string | undefined>;
    /**
     * The creation date of the Asset.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The Asset description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The last modified date of the Asset.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name of the storage account.
     */
    public readonly storageAccountName!: pulumi.Output<string | undefined>;
    /**
     * The Asset encryption format. One of None or MediaStorageEncryption.
     */
    public /*out*/ readonly storageEncryptionFormat!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Asset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssetArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.assetName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'assetName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["alternateId"] = args ? args.alternateId : undefined;
            inputs["assetName"] = args ? args.assetName : undefined;
            inputs["container"] = args ? args.container : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            inputs["assetId"] = undefined /*out*/;
            inputs["created"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["storageEncryptionFormat"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["alternateId"] = undefined /*out*/;
            inputs["assetId"] = undefined /*out*/;
            inputs["container"] = undefined /*out*/;
            inputs["created"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["storageAccountName"] = undefined /*out*/;
            inputs["storageEncryptionFormat"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:media/latest:Asset" }, { type: "azure-nextgen:media/v20180330preview:Asset" }, { type: "azure-nextgen:media/v20180601preview:Asset" }, { type: "azure-nextgen:media/v20180701:Asset" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Asset.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Asset resource.
 */
export interface AssetArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The alternate ID of the Asset.
     */
    readonly alternateId?: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    readonly assetName: pulumi.Input<string>;
    /**
     * The name of the asset blob container.
     */
    readonly container?: pulumi.Input<string>;
    /**
     * The Asset description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the storage account.
     */
    readonly storageAccountName?: pulumi.Input<string>;
}
