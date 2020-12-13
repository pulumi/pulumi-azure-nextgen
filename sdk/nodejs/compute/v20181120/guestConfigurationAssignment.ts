// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 */
export class GuestConfigurationAssignment extends pulumi.CustomResource {
    /**
     * Get an existing GuestConfigurationAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GuestConfigurationAssignment {
        return new GuestConfigurationAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:compute/v20181120:GuestConfigurationAssignment';

    /**
     * Returns true if the given object is an instance of GuestConfigurationAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuestConfigurationAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuestConfigurationAssignment.__pulumiType;
    }

    /**
     * Region where the VM is located.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the guest configuration assignment.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Properties of the Guest configuration assignment.
     */
    public readonly properties!: pulumi.Output<outputs.compute.v20181120.GuestConfigurationAssignmentPropertiesResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GuestConfigurationAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuestConfigurationAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.guestConfigurationAssignmentName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'guestConfigurationAssignmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'vmName'");
            }
            inputs["guestConfigurationAssignmentName"] = args ? args.guestConfigurationAssignmentName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["vmName"] = args ? args.vmName : undefined;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:compute/latest:GuestConfigurationAssignment" }, { type: "azure-nextgen:compute/v20180630preview:GuestConfigurationAssignment" }, { type: "azure-nextgen:compute/v20200625:GuestConfigurationAssignment" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(GuestConfigurationAssignment.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a GuestConfigurationAssignment resource.
 */
export interface GuestConfigurationAssignmentArgs {
    /**
     * Name of the guest configuration assignment.
     */
    readonly guestConfigurationAssignmentName: pulumi.Input<string>;
    /**
     * Region where the VM is located.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the guest configuration assignment.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Properties of the Guest configuration assignment.
     */
    readonly properties?: pulumi.Input<inputs.compute.v20181120.GuestConfigurationAssignmentProperties>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    readonly vmName: pulumi.Input<string>;
}
