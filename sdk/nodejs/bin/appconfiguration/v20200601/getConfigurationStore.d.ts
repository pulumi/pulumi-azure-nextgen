import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConfigurationStore(args: GetConfigurationStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationStoreResult>;
export interface GetConfigurationStoreArgs {
    /**
     * The name of the configuration store.
     */
    readonly configStoreName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it.
 */
export interface GetConfigurationStoreResult {
    /**
     * The creation date of configuration store.
     */
    readonly creationDate: string;
    /**
     * The encryption settings of the configuration store.
     */
    readonly encryption?: outputs.appconfiguration.v20200601.EncryptionPropertiesResponse;
    /**
     * The DNS endpoint where the configuration store API will be available.
     */
    readonly endpoint: string;
    /**
     * The managed identity information, if configured.
     */
    readonly identity?: outputs.appconfiguration.v20200601.ResourceIdentityResponse;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    readonly privateEndpointConnections: outputs.appconfiguration.v20200601.PrivateEndpointConnectionReferenceResponse[];
    /**
     * The provisioning state of the configuration store.
     */
    readonly provisioningState: string;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The sku of the configuration store.
     */
    readonly sku: outputs.appconfiguration.v20200601.SkuResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
