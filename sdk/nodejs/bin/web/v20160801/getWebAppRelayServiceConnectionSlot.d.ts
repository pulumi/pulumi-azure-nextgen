import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppRelayServiceConnectionSlot(args: GetWebAppRelayServiceConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppRelayServiceConnectionSlotResult>;
export interface GetWebAppRelayServiceConnectionSlotArgs {
    /**
     * Name of the hybrid connection.
     */
    readonly entityName: string;
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get a hybrid connection for the production slot.
     */
    readonly slot: string;
}
/**
 * Hybrid Connection for an App Service app.
 */
export interface GetWebAppRelayServiceConnectionSlotResult {
    readonly biztalkUri?: string;
    readonly entityConnectionString?: string;
    readonly entityName?: string;
    readonly hostname?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    readonly port?: number;
    readonly resourceConnectionString?: string;
    readonly resourceType?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
