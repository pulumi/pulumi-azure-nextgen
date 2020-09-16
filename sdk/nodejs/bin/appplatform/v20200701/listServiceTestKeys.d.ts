import * as pulumi from "@pulumi/pulumi";
export declare function listServiceTestKeys(args: ListServiceTestKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListServiceTestKeysResult>;
export interface ListServiceTestKeysArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    readonly serviceName: string;
}
/**
 * Test keys payload
 */
export interface ListServiceTestKeysResult {
    /**
     * Indicates whether the test endpoint feature enabled or not
     */
    readonly enabled?: boolean;
    /**
     * Primary key
     */
    readonly primaryKey?: string;
    /**
     * Primary test endpoint
     */
    readonly primaryTestEndpoint?: string;
    /**
     * Secondary key
     */
    readonly secondaryKey?: string;
    /**
     * Secondary test endpoint
     */
    readonly secondaryTestEndpoint?: string;
}
