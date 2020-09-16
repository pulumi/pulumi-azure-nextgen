import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAutomationAccount(args: GetAutomationAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationAccountResult>;
export interface GetAutomationAccountArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Definition of the automation account type.
 */
export interface GetAutomationAccountResult {
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Gets or sets the last modified by.
     */
    readonly lastModifiedBy?: string;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the SKU of account.
     */
    readonly sku?: outputs.automation.v20151031.SkuResponse;
    /**
     * Gets status of account.
     */
    readonly state: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
