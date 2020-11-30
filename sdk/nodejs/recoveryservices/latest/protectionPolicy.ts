// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

/**
 * Base class for backup policy. Workload-specific backup policies are derived from this class.
 */
export class ProtectionPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ProtectionPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProtectionPolicy {
        return new ProtectionPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:recoveryservices/latest:ProtectionPolicy';

    /**
     * Returns true if the given object is an instance of ProtectionPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProtectionPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtectionPolicy.__pulumiType;
    }

    /**
     * Optional ETag.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ProtectionPolicyResource properties
     */
    public readonly properties!: pulumi.Output<outputs.recoveryservices.latest.AzureFileShareProtectionPolicyResponse | outputs.recoveryservices.latest.AzureIaaSVMProtectionPolicyResponse | outputs.recoveryservices.latest.AzureSqlProtectionPolicyResponse | outputs.recoveryservices.latest.AzureVmWorkloadProtectionPolicyResponse | outputs.recoveryservices.latest.GenericProtectionPolicyResponse | outputs.recoveryservices.latest.MabProtectionPolicyResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProtectionPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectionPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.policyName === undefined) {
                throw new Error("Missing required property 'policyName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.vaultName === undefined) {
                throw new Error("Missing required property 'vaultName'");
            }
            inputs["eTag"] = args ? args.eTag : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["policyName"] = args ? args.policyName : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vaultName"] = args ? args.vaultName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["eTag"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:recoveryservices/v20160601:ProtectionPolicy" }, { type: "azure-nextgen:recoveryservices/v20201001:ProtectionPolicy" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ProtectionPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProtectionPolicy resource.
 */
export interface ProtectionPolicyArgs {
    /**
     * Optional ETag.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Backup policy to be created.
     */
    readonly policyName: pulumi.Input<string>;
    /**
     * ProtectionPolicyResource properties
     */
    readonly properties?: pulumi.Input<inputs.recoveryservices.latest.AzureFileShareProtectionPolicy | inputs.recoveryservices.latest.AzureIaaSVMProtectionPolicy | inputs.recoveryservices.latest.AzureSqlProtectionPolicy | inputs.recoveryservices.latest.AzureVmWorkloadProtectionPolicy | inputs.recoveryservices.latest.GenericProtectionPolicy | inputs.recoveryservices.latest.MabProtectionPolicy>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the recovery services vault.
     */
    readonly vaultName: pulumi.Input<string>;
}
