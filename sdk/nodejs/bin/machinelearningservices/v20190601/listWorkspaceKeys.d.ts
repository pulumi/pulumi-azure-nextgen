import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listWorkspaceKeys(args: ListWorkspaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceKeysResult>;
export interface ListWorkspaceKeysArgs {
    /**
     * Name of the resource group in which workspace is located.
     */
    readonly resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    readonly workspaceName: string;
}
export interface ListWorkspaceKeysResult {
    readonly appInsightsInstrumentationKey: string;
    readonly containerRegistryCredentials: outputs.machinelearningservices.v20190601.RegistryListCredentialsResultResponse;
    readonly userStorageKey: string;
    readonly userStorageResourceId: string;
}
