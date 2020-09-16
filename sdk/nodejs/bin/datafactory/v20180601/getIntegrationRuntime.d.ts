import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationRuntime(args: GetIntegrationRuntimeArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeResult>;
export interface GetIntegrationRuntimeArgs {
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * The integration runtime name.
     */
    readonly integrationRuntimeName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Integration runtime resource type.
 */
export interface GetIntegrationRuntimeResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Integration runtime properties.
     */
    readonly properties: outputs.datafactory.v20180601.IntegrationRuntimeResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
