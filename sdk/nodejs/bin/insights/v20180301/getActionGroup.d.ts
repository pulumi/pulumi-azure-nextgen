import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getActionGroup(args: GetActionGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetActionGroupResult>;
export interface GetActionGroupArgs {
    /**
     * The name of the action group.
     */
    readonly actionGroupName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * An action group resource.
 */
export interface GetActionGroupResult {
    /**
     * The list of AutomationRunbook receivers that are part of this action group.
     */
    readonly automationRunbookReceivers?: outputs.insights.v20180301.AutomationRunbookReceiverResponse[];
    /**
     * The list of AzureAppPush receivers that are part of this action group.
     */
    readonly azureAppPushReceivers?: outputs.insights.v20180301.AzureAppPushReceiverResponse[];
    /**
     * The list of azure function receivers that are part of this action group.
     */
    readonly azureFunctionReceivers?: outputs.insights.v20180301.AzureFunctionReceiverResponse[];
    /**
     * The list of email receivers that are part of this action group.
     */
    readonly emailReceivers?: outputs.insights.v20180301.EmailReceiverResponse[];
    /**
     * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
     */
    readonly enabled: boolean;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly groupShortName: string;
    /**
     * The list of ITSM receivers that are part of this action group.
     */
    readonly itsmReceivers?: outputs.insights.v20180301.ItsmReceiverResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The list of logic app receivers that are part of this action group.
     */
    readonly logicAppReceivers?: outputs.insights.v20180301.LogicAppReceiverResponse[];
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The list of SMS receivers that are part of this action group.
     */
    readonly smsReceivers?: outputs.insights.v20180301.SmsReceiverResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * The list of voice receivers that are part of this action group.
     */
    readonly voiceReceivers?: outputs.insights.v20180301.VoiceReceiverResponse[];
    /**
     * The list of webhook receivers that are part of this action group.
     */
    readonly webhookReceivers?: outputs.insights.v20180301.WebhookReceiverResponse[];
}
