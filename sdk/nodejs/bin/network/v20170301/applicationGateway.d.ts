import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Application gateway resource
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
     * Authentication certificates of the application gateway resource.
     */
    readonly authenticationCertificates: pulumi.Output<outputs.network.v20170301.ApplicationGatewayAuthenticationCertificateResponse[] | undefined>;
    /**
     * Backend address pool of the application gateway resource.
     */
    readonly backendAddressPools: pulumi.Output<outputs.network.v20170301.ApplicationGatewayBackendAddressPoolResponse[] | undefined>;
    /**
     * Backend http settings of the application gateway resource.
     */
    readonly backendHttpSettingsCollection: pulumi.Output<outputs.network.v20170301.ApplicationGatewayBackendHttpSettingsResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Frontend IP addresses of the application gateway resource.
     */
    readonly frontendIPConfigurations: pulumi.Output<outputs.network.v20170301.ApplicationGatewayFrontendIPConfigurationResponse[] | undefined>;
    /**
     * Frontend ports of the application gateway resource.
     */
    readonly frontendPorts: pulumi.Output<outputs.network.v20170301.ApplicationGatewayFrontendPortResponse[] | undefined>;
    /**
     * Subnets of application the gateway resource.
     */
    readonly gatewayIPConfigurations: pulumi.Output<outputs.network.v20170301.ApplicationGatewayIPConfigurationResponse[] | undefined>;
    /**
     * Http listeners of the application gateway resource.
     */
    readonly httpListeners: pulumi.Output<outputs.network.v20170301.ApplicationGatewayHttpListenerResponse[] | undefined>;
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
    readonly probes: pulumi.Output<outputs.network.v20170301.ApplicationGatewayProbeResponse[] | undefined>;
    /**
     * Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Request routing rules of the application gateway resource.
     */
    readonly requestRoutingRules: pulumi.Output<outputs.network.v20170301.ApplicationGatewayRequestRoutingRuleResponse[] | undefined>;
    /**
     * Resource GUID property of the application gateway resource.
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * SKU of the application gateway resource.
     */
    readonly sku: pulumi.Output<outputs.network.v20170301.ApplicationGatewaySkuResponse | undefined>;
    /**
     * SSL certificates of the application gateway resource.
     */
    readonly sslCertificates: pulumi.Output<outputs.network.v20170301.ApplicationGatewaySslCertificateResponse[] | undefined>;
    /**
     * SSL policy of the application gateway resource.
     */
    readonly sslPolicy: pulumi.Output<outputs.network.v20170301.ApplicationGatewaySslPolicyResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * URL path map of the application gateway resource.
     */
    readonly urlPathMaps: pulumi.Output<outputs.network.v20170301.ApplicationGatewayUrlPathMapResponse[] | undefined>;
    /**
     * Web application firewall configuration.
     */
    readonly webApplicationFirewallConfiguration: pulumi.Output<outputs.network.v20170301.ApplicationGatewayWebApplicationFirewallConfigurationResponse | undefined>;
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
     * Authentication certificates of the application gateway resource.
     */
    readonly authenticationCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayAuthenticationCertificate>[]>;
    /**
     * Backend address pool of the application gateway resource.
     */
    readonly backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * Backend http settings of the application gateway resource.
     */
    readonly backendHttpSettingsCollection?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayBackendHttpSettings>[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Frontend IP addresses of the application gateway resource.
     */
    readonly frontendIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayFrontendIPConfiguration>[]>;
    /**
     * Frontend ports of the application gateway resource.
     */
    readonly frontendPorts?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayFrontendPort>[]>;
    /**
     * Subnets of application the gateway resource.
     */
    readonly gatewayIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayIPConfiguration>[]>;
    /**
     * Http listeners of the application gateway resource.
     */
    readonly httpListeners?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayHttpListener>[]>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Probes of the application gateway resource.
     */
    readonly probes?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayProbe>[]>;
    /**
     * Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Request routing rules of the application gateway resource.
     */
    readonly requestRoutingRules?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource GUID property of the application gateway resource.
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * SKU of the application gateway resource.
     */
    readonly sku?: pulumi.Input<inputs.network.v20170301.ApplicationGatewaySku>;
    /**
     * SSL certificates of the application gateway resource.
     */
    readonly sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewaySslCertificate>[]>;
    /**
     * SSL policy of the application gateway resource.
     */
    readonly sslPolicy?: pulumi.Input<inputs.network.v20170301.ApplicationGatewaySslPolicy>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * URL path map of the application gateway resource.
     */
    readonly urlPathMaps?: pulumi.Input<pulumi.Input<inputs.network.v20170301.ApplicationGatewayUrlPathMap>[]>;
    /**
     * Web application firewall configuration.
     */
    readonly webApplicationFirewallConfiguration?: pulumi.Input<inputs.network.v20170301.ApplicationGatewayWebApplicationFirewallConfiguration>;
}
