import * as pulumi from "@pulumi/pulumi";
export declare function getDataConnector(args: GetDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetDataConnectorResult>;
export interface GetDataConnectorArgs {
    /**
     * Connector ID
     */
    readonly dataConnectorId: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}
/**
 * Data connector.
 */
export interface GetDataConnectorResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The data connector kind
     */
    readonly kind: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure resource type
     */
    readonly type: string;
}
