import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listLabVhds(args: ListLabVhdsArgs, opts?: pulumi.InvokeOptions): Promise<ListLabVhdsResult>;
export interface ListLabVhdsArgs {
    /**
     * The name of the lab.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The response of a list operation.
 */
export interface ListLabVhdsResult {
    /**
     * Link for next set of results.
     */
    readonly nextLink?: string;
    /**
     * Results of the list operation.
     */
    readonly value?: outputs.devtestlab.v20180915.LabVhdResponse[];
}
