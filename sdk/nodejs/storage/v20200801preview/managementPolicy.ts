// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The Get Storage Account ManagementPolicies operation response.
 */
export class ManagementPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ManagementPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementPolicy {
        return new ManagementPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:storage/v20200801preview:ManagementPolicy';

    /**
     * Returns true if the given object is an instance of ManagementPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementPolicy.__pulumiType;
    }

    /**
     * Returns the date and time the ManagementPolicies was last modified.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Storage Account ManagementPolicy, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
     */
    public readonly policy!: pulumi.Output<outputs.storage.v20200801preview.ManagementPolicySchemaResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagementPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.managementPolicyName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'managementPolicyName'");
            }
            if ((!args || args.policy === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["managementPolicyName"] = args ? args.managementPolicyName : undefined;
            inputs["policy"] = args ? args.policy : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["lastModifiedTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["lastModifiedTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["policy"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:storage/latest:ManagementPolicy" }, { type: "azure-nextgen:storage/v20180301preview:ManagementPolicy" }, { type: "azure-nextgen:storage/v20181101:ManagementPolicy" }, { type: "azure-nextgen:storage/v20190401:ManagementPolicy" }, { type: "azure-nextgen:storage/v20190601:ManagementPolicy" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ManagementPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementPolicy resource.
 */
export interface ManagementPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The name of the Storage Account Management Policy. It should always be 'default'
     */
    readonly managementPolicyName: pulumi.Input<string>;
    /**
     * The Storage Account ManagementPolicy, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
     */
    readonly policy: pulumi.Input<inputs.storage.v20200801preview.ManagementPolicySchema>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
