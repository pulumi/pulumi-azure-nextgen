// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Represents a lab.
 */
export class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Lab {
        return new Lab(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:labservices/latest:Lab';

    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lab {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lab.__pulumiType;
    }

    /**
     * Object id of the user that created the lab.
     */
    public /*out*/ readonly createdByObjectId!: pulumi.Output<string>;
    /**
     * Lab creator name
     */
    public /*out*/ readonly createdByUserPrincipalName!: pulumi.Output<string>;
    /**
     * Creation date for the lab
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * Invitation code that users can use to join a lab.
     */
    public /*out*/ readonly invitationCode!: pulumi.Output<string>;
    /**
     * The details of the latest operation. ex: status, error
     */
    public /*out*/ readonly latestOperationResult!: pulumi.Output<outputs.labservices.latest.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Maximum number of users allowed in the lab.
     */
    public readonly maxUsersInLab!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public readonly uniqueIdentifier!: pulumi.Output<string | undefined>;
    /**
     * Maximum duration a user can use an environment for in the lab.
     */
    public readonly usageQuota!: pulumi.Output<string | undefined>;
    /**
     * Lab user access mode (open to all vs. restricted to those listed on the lab).
     */
    public readonly userAccessMode!: pulumi.Output<string | undefined>;
    /**
     * Maximum value MaxUsersInLab can be set to, as specified by the service
     */
    public /*out*/ readonly userQuota!: pulumi.Output<number>;

    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.labAccountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'labAccountName'");
            }
            if ((!args || args.labName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["labAccountName"] = args ? args.labAccountName : undefined;
            inputs["labName"] = args ? args.labName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maxUsersInLab"] = args ? args.maxUsersInLab : undefined;
            inputs["provisioningState"] = args ? args.provisioningState : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["uniqueIdentifier"] = args ? args.uniqueIdentifier : undefined;
            inputs["usageQuota"] = args ? args.usageQuota : undefined;
            inputs["userAccessMode"] = args ? args.userAccessMode : undefined;
            inputs["createdByObjectId"] = undefined /*out*/;
            inputs["createdByUserPrincipalName"] = undefined /*out*/;
            inputs["createdDate"] = undefined /*out*/;
            inputs["invitationCode"] = undefined /*out*/;
            inputs["latestOperationResult"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["userQuota"] = undefined /*out*/;
        } else {
            inputs["createdByObjectId"] = undefined /*out*/;
            inputs["createdByUserPrincipalName"] = undefined /*out*/;
            inputs["createdDate"] = undefined /*out*/;
            inputs["invitationCode"] = undefined /*out*/;
            inputs["latestOperationResult"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["maxUsersInLab"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["uniqueIdentifier"] = undefined /*out*/;
            inputs["usageQuota"] = undefined /*out*/;
            inputs["userAccessMode"] = undefined /*out*/;
            inputs["userQuota"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:labservices/v20181015:Lab" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Lab.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Maximum number of users allowed in the lab.
     */
    readonly maxUsersInLab?: pulumi.Input<number>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: pulumi.Input<string>;
    /**
     * Maximum duration a user can use an environment for in the lab.
     */
    readonly usageQuota?: pulumi.Input<string>;
    /**
     * Lab user access mode (open to all vs. restricted to those listed on the lab).
     */
    readonly userAccessMode?: pulumi.Input<string | enums.labservices.latest.LabUserAccessMode>;
}
