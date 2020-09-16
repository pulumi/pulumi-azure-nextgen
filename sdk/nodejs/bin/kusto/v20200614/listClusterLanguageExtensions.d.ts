import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listClusterLanguageExtensions(args: ListClusterLanguageExtensionsArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterLanguageExtensionsResult>;
export interface ListClusterLanguageExtensionsArgs {
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    readonly resourceGroupName: string;
}
/**
 * The list of language extension objects.
 */
export interface ListClusterLanguageExtensionsResult {
    /**
     * The list of language extensions.
     */
    readonly value?: outputs.kusto.v20200614.LanguageExtensionResponse[];
}
