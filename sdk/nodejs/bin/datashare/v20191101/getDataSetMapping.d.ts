import * as pulumi from "@pulumi/pulumi";
export declare function getDataSetMapping(args: GetDataSetMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSetMappingResult>;
export interface GetDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The name of the dataSetMapping.
     */
    readonly dataSetMappingName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    readonly shareSubscriptionName: string;
}
/**
 * A data set mapping data transfer object.
 */
export interface GetDataSetMappingResult {
    /**
     * Kind of data set mapping.
     */
    readonly kind: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
}
