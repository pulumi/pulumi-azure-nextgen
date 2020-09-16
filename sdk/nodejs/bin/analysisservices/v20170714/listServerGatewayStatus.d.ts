import * as pulumi from "@pulumi/pulumi";
export declare function listServerGatewayStatus(args: ListServerGatewayStatusArgs, opts?: pulumi.InvokeOptions): Promise<ListServerGatewayStatusResult>;
export interface ListServerGatewayStatusArgs {
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Analysis Services server. It must be at least 3 characters in length, and no more than 63.
     */
    readonly serverName: string;
}
/**
 * Status of gateway is live
 */
export interface ListServerGatewayStatusResult {
    /**
     * Live message of list gateway.
     */
    readonly status?: string;
}
