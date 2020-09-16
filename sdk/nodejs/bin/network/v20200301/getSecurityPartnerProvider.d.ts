import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSecurityPartnerProvider(args: GetSecurityPartnerProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityPartnerProviderResult>;
export interface GetSecurityPartnerProviderArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Security Partner Provider.
     */
    readonly securityPartnerProviderName: string;
}
/**
 * Security Partner Provider resource.
 */
export interface GetSecurityPartnerProviderResult {
    /**
     * The connection status with the Security Partner Provider.
     */
    readonly connectionStatus: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the Security Partner Provider resource.
     */
    readonly provisioningState: string;
    /**
     * The security provider name.
     */
    readonly securityProviderName?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The virtualHub to which the Security Partner Provider belongs.
     */
    readonly virtualHub?: outputs.network.v20200301.SubResourceResponse;
}
