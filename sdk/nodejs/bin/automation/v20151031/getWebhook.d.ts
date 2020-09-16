import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWebhook(args: GetWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookResult>;
export interface GetWebhookArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The webhook name.
     */
    readonly webhookName: string;
}
/**
 * Definition of the webhook type.
 */
export interface GetWebhookResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the expiry time.
     */
    readonly expiryTime?: string;
    /**
     * Gets or sets the value of the enabled flag of the webhook.
     */
    readonly isEnabled?: boolean;
    /**
     * Gets or sets the last invoked time.
     */
    readonly lastInvokedTime?: string;
    /**
     * Details of the user who last modified the Webhook
     */
    readonly lastModifiedBy?: string;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Gets or sets the name of the hybrid worker group the webhook job will run on.
     */
    readonly runOn?: string;
    /**
     * Gets or sets the runbook the webhook is associated with.
     */
    readonly runbook?: outputs.automation.v20151031.RunbookAssociationPropertyResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets the webhook uri.
     */
    readonly uri?: string;
}
