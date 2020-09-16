import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listWebAppSiteBackups(args: ListWebAppSiteBackupsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSiteBackupsResult>;
export interface ListWebAppSiteBackupsArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Collection of backup items.
 */
export interface ListWebAppSiteBackupsResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: outputs.web.v20190801.BackupItemResponse[];
}
