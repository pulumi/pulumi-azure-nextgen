import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ApplicationGateways resource
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
     * Gets or sets backend address pool of application gateway resource
     */
    readonly backendAddressPools: pulumi.Output<outputs.network.v20160330.ApplicationGatewayBackendAddressPoolResponse[] | undefined>;
    /**
     * Gets or sets backend http settings of application gateway resource
     */
    readonly backendHttpSettingsCollection: pulumi.Output<outputs.network.v20160330.ApplicationGatewayBackendHttpSettingsResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets frontend IP addresses of application gateway resource
     */
    readonly frontendIPConfigurations: pulumi.Output<outputs.network.v20160330.ApplicationGatewayFrontendIPConfigurationResponse[] | undefined>;
    /**
     * Gets or sets frontend ports of application gateway resource
     */
    readonly frontendPorts: pulumi.Output<outputs.network.v20160330.ApplicationGatewayFrontendPortResponse[] | undefined>;
    /**
     * Gets or sets subnets of application gateway resource
     */
    readonly gatewayIPConfigurations: pulumi.Output<outputs.network.v20160330.ApplicationGatewayIPConfigurationResponse[] | undefined>;
    /**
     * Gets or sets HTTP listeners of application gateway resource
     */
    readonly httpListeners: pulumi.Output<outputs.network.v20160330.ApplicationGatewayHttpListenerResponse[] | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets operational state of application gateway resource
     */
    readonly operationalState: pulumi.Output<string>;
    /**
     * Gets or sets probes of application gateway resource
     */
    readonly probes: pulumi.Output<outputs.network.v20160330.ApplicationGatewayProbeResponse[] | undefined>;
    /**
     * Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets request routing rules of application gateway resource
     */
    readonly requestRoutingRules: pulumi.Output<outputs.network.v20160330.ApplicationGatewayRequestRoutingRuleResponse[] | undefined>;
    /**
     * Gets or sets resource GUID property of the ApplicationGateway resource
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * Gets or sets sku of application gateway resource
     */
    readonly sku: pulumi.Output<outputs.network.v20160330.ApplicationGatewaySkuResponse | undefined>;
    /**
     * Gets or sets ssl certificates of application gateway resource
     */
    readonly sslCertificates: pulumi.Output<outputs.network.v20160330.ApplicationGatewaySslCertificateResponse[] | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Gets or sets URL path map of application gateway resource
     */
    readonly urlPathMaps: pulumi.Output<outputs.network.v20160330.ApplicationGatewayUrlPathMapResponse[] | undefined>;
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
     * The name of the ApplicationGateway.
     */
    readonly applicationGatewayName: pulumi.Input<string>;
    /**
     * Gets or sets backend address pool of application gateway resource
     */
    readonly backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * Gets or sets backend http settings of application gateway resource
     */
    readonly backendHttpSettingsCollection?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayBackendHttpSettings>[]>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Gets or sets frontend IP addresses of application gateway resource
     */
    readonly frontendIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayFrontendIPConfiguration>[]>;
    /**
     * Gets or sets frontend ports of application gateway resource
     */
    readonly frontendPorts?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayFrontendPort>[]>;
    /**
     * Gets or sets subnets of application gateway resource
     */
    readonly gatewayIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayIPConfiguration>[]>;
    /**
     * Gets or sets HTTP listeners of application gateway resource
     */
    readonly httpListeners?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayHttpListener>[]>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets probes of application gateway resource
     */
    readonly probes?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayProbe>[]>;
    /**
     * Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Gets or sets request routing rules of application gateway resource
     */
    readonly requestRoutingRules?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource GUID property of the ApplicationGateway resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Gets or sets sku of application gateway resource
     */
    readonly sku?: pulumi.Input<inputs.network.v20160330.ApplicationGatewaySku>;
    /**
     * Gets or sets ssl certificates of application gateway resource
     */
    readonly sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewaySslCertificate>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Gets or sets URL path map of application gateway resource
     */
    readonly urlPathMaps?: pulumi.Input<pulumi.Input<inputs.network.v20160330.ApplicationGatewayUrlPathMap>[]>;
}
