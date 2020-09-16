import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDataFlow(args: GetDataFlowArgs, opts?: pulumi.InvokeOptions): Promise<GetDataFlowResult>;
export interface GetDataFlowArgs {
    /**
     * The data flow name.
     */
    readonly dataFlowName: string;
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Data flow resource type.
 */
export interface GetDataFlowResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Data flow properties.
     */
    readonly properties: outputs.datafactory.v20180601.DataFlowResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
