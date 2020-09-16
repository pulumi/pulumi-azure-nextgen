import * as pulumi from "@pulumi/pulumi";
export declare function getServerCommunicationLink(args: GetServerCommunicationLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetServerCommunicationLinkResult>;
export interface GetServerCommunicationLinkArgs {
    /**
     * The name of the server communication link.
     */
    readonly communicationLinkName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * Server communication link.
 */
export interface GetServerCommunicationLinkResult {
    /**
     * Communication link kind.  This property is used for Azure Portal metadata.
     */
    readonly kind: string;
    /**
     * Communication link location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name of the partner server.
     */
    readonly partnerServer: string;
    /**
     * The state.
     */
    readonly state: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
