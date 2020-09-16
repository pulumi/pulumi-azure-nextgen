import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRunbook(args: GetRunbookArgs, opts?: pulumi.InvokeOptions): Promise<GetRunbookResult>;
export interface GetRunbookArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The runbook name.
     */
    readonly runbookName: string;
}
/**
 * Definition of the runbook type.
 */
export interface GetRunbookResult {
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the draft runbook properties.
     */
    readonly draft?: outputs.automation.v20151031.RunbookDraftResponse;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Gets or sets the job count of the runbook.
     */
    readonly jobCount?: number;
    /**
     * Gets or sets the last modified by.
     */
    readonly lastModifiedBy?: string;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * Gets or sets the option to log activity trace of the runbook.
     */
    readonly logActivityTrace?: number;
    /**
     * Gets or sets progress log option.
     */
    readonly logProgress?: boolean;
    /**
     * Gets or sets verbose log option.
     */
    readonly logVerbose?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the runbook output types.
     */
    readonly outputTypes?: string[];
    /**
     * Gets or sets the runbook parameters.
     */
    readonly parameters?: {
        [key: string]: outputs.automation.v20151031.RunbookParameterResponse;
    };
    /**
     * Gets or sets the provisioning state of the runbook.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the published runbook content link.
     */
    readonly publishContentLink?: outputs.automation.v20151031.ContentLinkResponse;
    /**
     * Gets or sets the type of the runbook.
     */
    readonly runbookType?: string;
    /**
     * Gets or sets the state of the runbook.
     */
    readonly state?: string;
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
