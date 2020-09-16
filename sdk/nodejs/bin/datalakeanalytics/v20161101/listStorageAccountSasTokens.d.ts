import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listStorageAccountSasTokens(args: ListStorageAccountSasTokensArgs, opts?: pulumi.InvokeOptions): Promise<ListStorageAccountSasTokensResult>;
export interface ListStorageAccountSasTokensArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    readonly accountName: string;
    /**
     * The name of the Azure storage container for which the SAS token is being requested.
     */
    readonly containerName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Azure storage account for which the SAS token is being requested.
     */
    readonly storageAccountName: string;
}
/**
 * The SAS response that contains the storage account, container and associated SAS token for connection use.
 */
export interface ListStorageAccountSasTokensResult {
    /**
     * The link (url) to the next page of results.
     */
    readonly nextLink: string;
    /**
     * The results of the list operation.
     */
    readonly value: outputs.datalakeanalytics.v20161101.SasTokenInformationResponse[];
}
