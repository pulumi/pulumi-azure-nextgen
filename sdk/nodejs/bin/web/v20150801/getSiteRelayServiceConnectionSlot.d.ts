import * as pulumi from "@pulumi/pulumi";
export declare function getSiteRelayServiceConnectionSlot(args: GetSiteRelayServiceConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteRelayServiceConnectionSlotResult>;
export interface GetSiteRelayServiceConnectionSlotArgs {
    /**
     * The name by which the Hybrid Connection is identified
     */
    readonly entityName: string;
    /**
     * The name of the web app
     */
    readonly name: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The name of the slot for the web app.
     */
    readonly slot: string;
}
/**
 * Class that represents a BizTalk Hybrid Connection
 */
export interface GetSiteRelayServiceConnectionSlotResult {
    readonly biztalkUri?: string;
    readonly entityConnectionString?: string;
    readonly entityName?: string;
    readonly hostname?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    readonly port?: number;
    readonly resourceConnectionString?: string;
    readonly resourceType?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
}
