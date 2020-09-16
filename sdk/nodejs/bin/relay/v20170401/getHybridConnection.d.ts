import * as pulumi from "@pulumi/pulumi";
export declare function getHybridConnection(args: GetHybridConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridConnectionResult>;
export interface GetHybridConnectionArgs {
    /**
     * The hybrid connection name.
     */
    readonly hybridConnectionName: string;
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of hybrid connection resource.
 */
export interface GetHybridConnectionResult {
    /**
     * The time the hybrid connection was created.
     */
    readonly createdAt: string;
    /**
     * The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
     */
    readonly listenerCount: number;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Returns true if client authorization is needed for this hybrid connection; otherwise, false.
     */
    readonly requiresClientAuthorization?: boolean;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: string;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    readonly userMetadata?: string;
}
