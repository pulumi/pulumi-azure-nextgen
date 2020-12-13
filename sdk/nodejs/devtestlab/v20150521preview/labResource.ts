// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A lab.
 */
export class LabResource extends pulumi.CustomResource {
    /**
     * Get an existing LabResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LabResource {
        return new LabResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:devtestlab/v20150521preview:LabResource';

    /**
     * Returns true if the given object is an instance of LabResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LabResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LabResource.__pulumiType;
    }

    /**
     * The artifact storage account of the lab.
     */
    public readonly artifactsStorageAccount!: pulumi.Output<string | undefined>;
    /**
     * The creation date of the lab.
     */
    public readonly createdDate!: pulumi.Output<string | undefined>;
    /**
     * The lab's default storage account.
     */
    public readonly defaultStorageAccount!: pulumi.Output<string | undefined>;
    /**
     * The default virtual network identifier of the lab.
     */
    public readonly defaultVirtualNetworkId!: pulumi.Output<string | undefined>;
    /**
     * The type of the lab storage.
     */
    public readonly labStorageType!: pulumi.Output<string | undefined>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The storage accounts of the lab.
     */
    public readonly storageAccounts!: pulumi.Output<string[] | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * The name of the key vault of the lab.
     */
    public readonly vaultName!: pulumi.Output<string | undefined>;

    /**
     * Create a LabResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["artifactsStorageAccount"] = args ? args.artifactsStorageAccount : undefined;
            inputs["createdDate"] = args ? args.createdDate : undefined;
            inputs["defaultStorageAccount"] = args ? args.defaultStorageAccount : undefined;
            inputs["defaultVirtualNetworkId"] = args ? args.defaultVirtualNetworkId : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["labStorageType"] = args ? args.labStorageType : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["provisioningState"] = args ? args.provisioningState : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["vaultName"] = args ? args.vaultName : undefined;
        } else {
            inputs["artifactsStorageAccount"] = undefined /*out*/;
            inputs["createdDate"] = undefined /*out*/;
            inputs["defaultStorageAccount"] = undefined /*out*/;
            inputs["defaultVirtualNetworkId"] = undefined /*out*/;
            inputs["labStorageType"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["storageAccounts"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["vaultName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:devtestlab/latest:LabResource" }, { type: "azure-nextgen:devtestlab/v20160515:LabResource" }, { type: "azure-nextgen:devtestlab/v20180915:LabResource" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(LabResource.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a LabResource resource.
 */
export interface LabResourceArgs {
    /**
     * The artifact storage account of the lab.
     */
    readonly artifactsStorageAccount?: pulumi.Input<string>;
    /**
     * The creation date of the lab.
     */
    readonly createdDate?: pulumi.Input<string>;
    /**
     * The lab's default storage account.
     */
    readonly defaultStorageAccount?: pulumi.Input<string>;
    /**
     * The default virtual network identifier of the lab.
     */
    readonly defaultVirtualNetworkId?: pulumi.Input<string>;
    /**
     * The identifier of the resource.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The type of the lab storage.
     */
    readonly labStorageType?: pulumi.Input<string | enums.devtestlab.v20150521preview.LabStorageType>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The storage accounts of the lab.
     */
    readonly storageAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The type of the resource.
     */
    readonly type?: pulumi.Input<string>;
    /**
     * The name of the key vault of the lab.
     */
    readonly vaultName?: pulumi.Input<string>;
}
