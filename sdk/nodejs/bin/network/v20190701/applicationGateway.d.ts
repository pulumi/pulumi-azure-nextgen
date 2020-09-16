import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Application gateway resource.
 */
export declare class ApplicationGateway extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationGateway;
    /**
     * Returns true if the given object is an instance of ApplicationGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApplicationGateway;
    /**
     * Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly authenticationCertificates: pulumi.Output<outputs.network.v20190701.ApplicationGatewayAuthenticationCertificateResponse[] | undefined>;
    /**
     * Autoscale Configuration.
     */
    readonly autoscaleConfiguration: pulumi.Output<outputs.network.v20190701.ApplicationGatewayAutoscaleConfigurationResponse | undefined>;
    /**
     * Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendAddressPools: pulumi.Output<outputs.network.v20190701.ApplicationGatewayBackendAddressPoolResponse[] | undefined>;
    /**
     * Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendHttpSettingsCollection: pulumi.Output<outputs.network.v20190701.ApplicationGatewayBackendHttpSettingsResponse[] | undefined>;
    /**
     * Custom error configurations of the application gateway resource.
     */
    readonly customErrorConfigurations: pulumi.Output<outputs.network.v20190701.ApplicationGatewayCustomErrorResponse[] | undefined>;
    /**
     * Whether FIPS is enabled on the application gateway resource.
     */
    readonly enableFips: pulumi.Output<boolean | undefined>;
    /**
     * Whether HTTP2 is enabled on the application gateway resource.
     */
    readonly enableHttp2: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Reference of the FirewallPolicy resource.
     */
    readonly firewallPolicy: pulumi.Output<outputs.network.v20190701.SubResourceResponse | undefined>;
    /**
     * Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendIPConfigurations: pulumi.Output<outputs.network.v20190701.ApplicationGatewayFrontendIPConfigurationResponse[] | undefined>;
    /**
     * Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendPorts: pulumi.Output<outputs.network.v20190701.ApplicationGatewayFrontendPortResponse[] | undefined>;
    /**
     * Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly gatewayIPConfigurations: pulumi.Output<outputs.network.v20190701.ApplicationGatewayIPConfigurationResponse[] | undefined>;
    /**
     * Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly httpListeners: pulumi.Output<outputs.network.v20190701.ApplicationGatewayHttpListenerResponse[] | undefined>;
    /**
     * The identity of the application gateway, if configured.
     */
    readonly identity: pulumi.Output<outputs.network.v20190701.ManagedServiceIdentityResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Operational state of the application gateway resource.
     */
    readonly operationalState: pulumi.Output<string>;
    /**
     * Probes of the application gateway resource.
     */
    readonly probes: pulumi.Output<outputs.network.v20190701.ApplicationGatewayProbeResponse[] | undefined>;
    /**
     * The provisioning state of the application gateway resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly redirectConfigurations: pulumi.Output<outputs.network.v20190701.ApplicationGatewayRedirectConfigurationResponse[] | undefined>;
    /**
     * Request routing rules of the application gateway resource.
     */
    readonly requestRoutingRules: pulumi.Output<outputs.network.v20190701.ApplicationGatewayRequestRoutingRuleResponse[] | undefined>;
    /**
     * The resource GUID property of the application gateway resource.
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * Rewrite rules for the application gateway resource.
     */
    readonly rewriteRuleSets: pulumi.Output<outputs.network.v20190701.ApplicationGatewayRewriteRuleSetResponse[] | undefined>;
    /**
     * SKU of the application gateway resource.
     */
    readonly sku: pulumi.Output<outputs.network.v20190701.ApplicationGatewaySkuResponse | undefined>;
    /**
     * SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly sslCertificates: pulumi.Output<outputs.network.v20190701.ApplicationGatewaySslCertificateResponse[] | undefined>;
    /**
     * SSL policy of the application gateway resource.
     */
    readonly sslPolicy: pulumi.Output<outputs.network.v20190701.ApplicationGatewaySslPolicyResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly trustedRootCertificates: pulumi.Output<outputs.network.v20190701.ApplicationGatewayTrustedRootCertificateResponse[] | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly urlPathMaps: pulumi.Output<outputs.network.v20190701.ApplicationGatewayUrlPathMapResponse[] | undefined>;
    /**
     * Web application firewall configuration.
     */
    readonly webApplicationFirewallConfiguration: pulumi.Output<outputs.network.v20190701.ApplicationGatewayWebApplicationFirewallConfigurationResponse | undefined>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a ApplicationGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGatewayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApplicationGateway resource.
 */
export interface ApplicationGatewayArgs {
    /**
     * The name of the application gateway.
     */
    readonly applicationGatewayName: pulumi.Input<string>;
    /**
     * Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly authenticationCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayAuthenticationCertificate>[]>;
    /**
     * Autoscale Configuration.
     */
    readonly autoscaleConfiguration?: pulumi.Input<inputs.network.v20190701.ApplicationGatewayAutoscaleConfiguration>;
    /**
     * Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly backendHttpSettingsCollection?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayBackendHttpSettings>[]>;
    /**
     * Custom error configurations of the application gateway resource.
     */
    readonly customErrorConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayCustomError>[]>;
    /**
     * Whether FIPS is enabled on the application gateway resource.
     */
    readonly enableFips?: pulumi.Input<boolean>;
    /**
     * Whether HTTP2 is enabled on the application gateway resource.
     */
    readonly enableHttp2?: pulumi.Input<boolean>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Reference of the FirewallPolicy resource.
     */
    readonly firewallPolicy?: pulumi.Input<inputs.network.v20190701.SubResource>;
    /**
     * Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayFrontendIPConfiguration>[]>;
    /**
     * Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly frontendPorts?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayFrontendPort>[]>;
    /**
     * Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly gatewayIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayIPConfiguration>[]>;
    /**
     * Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly httpListeners?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayHttpListener>[]>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The identity of the application gateway, if configured.
     */
    readonly identity?: pulumi.Input<inputs.network.v20190701.ManagedServiceIdentity>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Probes of the application gateway resource.
     */
    readonly probes?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayProbe>[]>;
    /**
     * The provisioning state of the application gateway resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly redirectConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayRedirectConfiguration>[]>;
    /**
     * Request routing rules of the application gateway resource.
     */
    readonly requestRoutingRules?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the application gateway resource.
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Rewrite rules for the application gateway resource.
     */
    readonly rewriteRuleSets?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayRewriteRuleSet>[]>;
    /**
     * SKU of the application gateway resource.
     */
    readonly sku?: pulumi.Input<inputs.network.v20190701.ApplicationGatewaySku>;
    /**
     * SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewaySslCertificate>[]>;
    /**
     * SSL policy of the application gateway resource.
     */
    readonly sslPolicy?: pulumi.Input<inputs.network.v20190701.ApplicationGatewaySslPolicy>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly trustedRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayTrustedRootCertificate>[]>;
    /**
     * URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
     */
    readonly urlPathMaps?: pulumi.Input<pulumi.Input<inputs.network.v20190701.ApplicationGatewayUrlPathMap>[]>;
    /**
     * Web application firewall configuration.
     */
    readonly webApplicationFirewallConfiguration?: pulumi.Input<inputs.network.v20190701.ApplicationGatewayWebApplicationFirewallConfiguration>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
