// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Class representing a cluster principal assignment.
 */
export class ClusterPrincipalAssignment extends pulumi.CustomResource {
    /**
     * Get an existing ClusterPrincipalAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ClusterPrincipalAssignment {
        return new ClusterPrincipalAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:kusto/v20191109:ClusterPrincipalAssignment';

    /**
     * Returns true if the given object is an instance of ClusterPrincipalAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterPrincipalAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterPrincipalAssignment.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
     */
    public readonly principalId!: pulumi.Output<string>;
    /**
     * The principal name
     */
    public /*out*/ readonly principalName!: pulumi.Output<string>;
    /**
     * Principal type.
     */
    public readonly principalType!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Cluster principal role.
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * The tenant id of the principal
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The tenant name of the principal
     */
    public /*out*/ readonly tenantName!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ClusterPrincipalAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterPrincipalAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.clusterName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.principalAssignmentName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'principalAssignmentName'");
            }
            if ((!args || args.principalId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'principalId'");
            }
            if ((!args || args.principalType === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'principalType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.role === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'role'");
            }
            inputs["clusterName"] = args ? args.clusterName : undefined;
            inputs["principalAssignmentName"] = args ? args.principalAssignmentName : undefined;
            inputs["principalId"] = args ? args.principalId : undefined;
            inputs["principalType"] = args ? args.principalType : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["role"] = args ? args.role : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["principalName"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["tenantName"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["name"] = undefined /*out*/;
            inputs["principalId"] = undefined /*out*/;
            inputs["principalName"] = undefined /*out*/;
            inputs["principalType"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["role"] = undefined /*out*/;
            inputs["tenantId"] = undefined /*out*/;
            inputs["tenantName"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:kusto/latest:ClusterPrincipalAssignment" }, { type: "azure-nextgen:kusto/v20200215:ClusterPrincipalAssignment" }, { type: "azure-nextgen:kusto/v20200614:ClusterPrincipalAssignment" }, { type: "azure-nextgen:kusto/v20200918:ClusterPrincipalAssignment" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ClusterPrincipalAssignment.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ClusterPrincipalAssignment resource.
 */
export interface ClusterPrincipalAssignmentArgs {
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The name of the Kusto principalAssignment.
     */
    readonly principalAssignmentName: pulumi.Input<string>;
    /**
     * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
     */
    readonly principalId: pulumi.Input<string>;
    /**
     * Principal type.
     */
    readonly principalType: pulumi.Input<string | enums.kusto.v20191109.PrincipalType>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Cluster principal role.
     */
    readonly role: pulumi.Input<string | enums.kusto.v20191109.ClusterPrincipalRole>;
    /**
     * The tenant id of the principal
     */
    readonly tenantId?: pulumi.Input<string>;
}
