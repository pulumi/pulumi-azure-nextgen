import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The integration account RosettaNet process configuration.
 */
export declare class RosettaNetProcessConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing RosettaNetProcessConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RosettaNetProcessConfiguration;
    /**
     * Returns true if the given object is an instance of RosettaNetProcessConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RosettaNetProcessConfiguration;
    /**
     * The RosettaNet process configuration activity settings.
     */
    readonly activitySettings: pulumi.Output<outputs.logic.v20160601.RosettaNetPipActivitySettingsResponse>;
    /**
     * The changed time.
     */
    readonly changedTime: pulumi.Output<string>;
    /**
     * The created time.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * The integration account RosettaNet ProcessConfiguration properties.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The RosettaNet initiator role settings.
     */
    readonly initiatorRoleSettings: pulumi.Output<outputs.logic.v20160601.RosettaNetPipRoleSettingsResponse>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets the resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The integration account RosettaNet process code.
     */
    readonly processCode: pulumi.Output<string>;
    /**
     * The integration account RosettaNet process name.
     */
    readonly processName: pulumi.Output<string>;
    /**
     * The integration account RosettaNet process version.
     */
    readonly processVersion: pulumi.Output<string>;
    /**
     * The RosettaNet responder role settings.
     */
    readonly responderRoleSettings: pulumi.Output<outputs.logic.v20160601.RosettaNetPipRoleSettingsResponse>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets the resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RosettaNetProcessConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RosettaNetProcessConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RosettaNetProcessConfiguration resource.
 */
export interface RosettaNetProcessConfigurationArgs {
    /**
     * The RosettaNet process configuration activity settings.
     */
    readonly activitySettings: pulumi.Input<inputs.logic.v20160601.RosettaNetPipActivitySettings>;
    /**
     * The integration account RosettaNet ProcessConfiguration properties.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The RosettaNet initiator role settings.
     */
    readonly initiatorRoleSettings: pulumi.Input<inputs.logic.v20160601.RosettaNetPipRoleSettings>;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The integration account RosettaNet process code.
     */
    readonly processCode: pulumi.Input<string>;
    /**
     * The integration account RosettaNet process name.
     */
    readonly processName: pulumi.Input<string>;
    /**
     * The integration account RosettaNet process version.
     */
    readonly processVersion: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The RosettaNet responder role settings.
     */
    readonly responderRoleSettings: pulumi.Input<inputs.logic.v20160601.RosettaNetPipRoleSettings>;
    /**
     * The integration account RosettaNet ProcessConfiguration name.
     */
    readonly rosettaNetProcessConfigurationName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
