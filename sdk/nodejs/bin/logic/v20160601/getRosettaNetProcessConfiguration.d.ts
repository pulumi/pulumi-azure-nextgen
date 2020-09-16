import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRosettaNetProcessConfiguration(args: GetRosettaNetProcessConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetRosettaNetProcessConfigurationResult>;
export interface GetRosettaNetProcessConfigurationArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The integration account RosettaNetProcessConfiguration name.
     */
    readonly rosettaNetProcessConfigurationName: string;
}
/**
 * The integration account RosettaNet process configuration.
 */
export interface GetRosettaNetProcessConfigurationResult {
    /**
     * The RosettaNet process configuration activity settings.
     */
    readonly activitySettings: outputs.logic.v20160601.RosettaNetPipActivitySettingsResponse;
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The integration account RosettaNet ProcessConfiguration properties.
     */
    readonly description?: string;
    /**
     * The RosettaNet initiator role settings.
     */
    readonly initiatorRoleSettings: outputs.logic.v20160601.RosettaNetPipRoleSettingsResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The integration account RosettaNet process code.
     */
    readonly processCode: string;
    /**
     * The integration account RosettaNet process name.
     */
    readonly processName: string;
    /**
     * The integration account RosettaNet process version.
     */
    readonly processVersion: string;
    /**
     * The RosettaNet responder role settings.
     */
    readonly responderRoleSettings: outputs.logic.v20160601.RosettaNetPipRoleSettingsResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
