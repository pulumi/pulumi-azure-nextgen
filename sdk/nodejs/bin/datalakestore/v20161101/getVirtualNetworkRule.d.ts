import * as pulumi from "@pulumi/pulumi";
export declare function getVirtualNetworkRule(args: GetVirtualNetworkRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkRuleResult>;
export interface GetVirtualNetworkRuleArgs {
    /**
     * The name of the Data Lake Store account.
     */
    readonly accountName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the virtual network rule to retrieve.
     */
    readonly virtualNetworkRuleName: string;
}
/**
 * Data Lake Store virtual network rule information.
 */
export interface GetVirtualNetworkRuleResult {
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The resource identifier for the subnet.
     */
    readonly subnetId: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
