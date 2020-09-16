import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApplicationGateway(args: GetApplicationGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGatewayResult>;
export interface GetApplicationGatewayArgs {
    /**
     * The name of the application gateway.
     */
    readonly applicationGatewayName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * ApplicationGateways resource
 */
export interface GetApplicationGatewayResult {
    /**
     * Authentication certificates of application gateway resource
     */
    readonly authenticationCertificates?: outputs.network.v20160601.ApplicationGatewayAuthenticationCertificateResponse[];
    /**
     * Backend address pool of application gateway resource
     */
    readonly backendAddressPools?: outputs.network.v20160601.ApplicationGatewayBackendAddressPoolResponse[];
    /**
     * Backend http settings of application gateway resource
     */
    readonly backendHttpSettingsCollection?: outputs.network.v20160601.ApplicationGatewayBackendHttpSettingsResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Frontend IP addresses of application gateway resource
     */
    readonly frontendIPConfigurations?: outputs.network.v20160601.ApplicationGatewayFrontendIPConfigurationResponse[];
    /**
     * Frontend ports of application gateway resource
     */
    readonly frontendPorts?: outputs.network.v20160601.ApplicationGatewayFrontendPortResponse[];
    /**
     * Subnets of application gateway resource
     */
    readonly gatewayIPConfigurations?: outputs.network.v20160601.ApplicationGatewayIPConfigurationResponse[];
    /**
     * HTTP listeners of application gateway resource
     */
    readonly httpListeners?: outputs.network.v20160601.ApplicationGatewayHttpListenerResponse[];
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Operational state of application gateway resource
     */
    readonly operationalState: string;
    /**
     * Probes of application gateway resource
     */
    readonly probes?: outputs.network.v20160601.ApplicationGatewayProbeResponse[];
    /**
     * Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Request routing rules of application gateway resource
     */
    readonly requestRoutingRules?: outputs.network.v20160601.ApplicationGatewayRequestRoutingRuleResponse[];
    /**
     * Resource guid property of the ApplicationGateway resource
     */
    readonly resourceGuid?: string;
    /**
     * Sku of application gateway resource
     */
    readonly sku?: outputs.network.v20160601.ApplicationGatewaySkuResponse;
    /**
     * SSL certificates of application gateway resource
     */
    readonly sslCertificates?: outputs.network.v20160601.ApplicationGatewaySslCertificateResponse[];
    /**
     * SSL policy of application gateway resource
     */
    readonly sslPolicy?: outputs.network.v20160601.ApplicationGatewaySslPolicyResponse;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * URL path map of application gateway resource
     */
    readonly urlPathMaps?: outputs.network.v20160601.ApplicationGatewayUrlPathMapResponse[];
}
