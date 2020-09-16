import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBackend(args: GetBackendArgs, opts?: pulumi.InvokeOptions): Promise<GetBackendResult>;
export interface GetBackendArgs {
    /**
     * Identifier of the Backend entity. Must be unique in the current API Management service instance.
     */
    readonly backendid: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Backend details.
 */
export interface GetBackendResult {
    /**
     * Backend Credentials Contract Properties
     */
    readonly credentials?: outputs.apimanagement.v20170301.BackendCredentialsContractResponse;
    /**
     * Backend Description.
     */
    readonly description?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Backend Properties contract
     */
    readonly properties: outputs.apimanagement.v20170301.BackendPropertiesResponse;
    /**
     * Backend communication protocol.
     */
    readonly protocol: string;
    /**
     * Backend Proxy Contract Properties
     */
    readonly proxy?: outputs.apimanagement.v20170301.BackendProxyContractResponse;
    /**
     * Management Uri of the Resource in External System. This url can be the Arm Resource Id of Logic Apps, Function Apps or Api Apps.
     */
    readonly resourceId?: string;
    /**
     * Backend Title.
     */
    readonly title?: string;
    /**
     * Backend TLS Properties
     */
    readonly tls?: outputs.apimanagement.v20170301.BackendTlsPropertiesResponse;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * Runtime Url of the Backend.
     */
    readonly url: string;
}
