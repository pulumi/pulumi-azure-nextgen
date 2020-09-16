import * as pulumi from "@pulumi/pulumi";
export declare function listAppServicePlanHybridConnectionKeys(args: ListAppServicePlanHybridConnectionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAppServicePlanHybridConnectionKeysResult>;
export interface ListAppServicePlanHybridConnectionKeysArgs {
    /**
     * Name of the App Service plan.
     */
    readonly name: string;
    /**
     * The name of the Service Bus namespace.
     */
    readonly namespaceName: string;
    /**
     * The name of the Service Bus relay.
     */
    readonly relayName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.
 */
export interface ListAppServicePlanHybridConnectionKeysResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The name of the send key.
     */
    readonly sendKeyName: string;
    /**
     * The value of the send key.
     */
    readonly sendKeyValue: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
