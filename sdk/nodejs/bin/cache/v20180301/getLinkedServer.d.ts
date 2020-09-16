import * as pulumi from "@pulumi/pulumi";
export declare function getLinkedServer(args: GetLinkedServerArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServerResult>;
export interface GetLinkedServerArgs {
    /**
     * The name of the linked server.
     */
    readonly linkedServerName: string;
    /**
     * The name of the redis cache.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Response to put/get linked server (with properties) for Redis cache.
 */
export interface GetLinkedServerResult {
    /**
     * Fully qualified resourceId of the linked redis cache.
     */
    readonly linkedRedisCacheId: string;
    /**
     * Location of the linked redis cache.
     */
    readonly linkedRedisCacheLocation: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Terminal state of the link between primary and secondary redis cache.
     */
    readonly provisioningState: string;
    /**
     * Role of the linked server.
     */
    readonly serverRole: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
