// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * ApplicationGateways resource
 */
export class ApplicationGateway extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationGateway {
        return new ApplicationGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20150501preview:ApplicationGateway';

    /**
     * Returns true if the given object is an instance of ApplicationGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationGateway.__pulumiType;
    }

    /**
     * Gets or sets backend address pool of application gateway resource
     */
    public readonly backendAddressPools!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewayBackendAddressPoolResponse[] | undefined>;
    /**
     * Gets or sets backend http settings of application gateway resource
     */
    public readonly backendHttpSettingsCollection!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewayBackendHttpSettingsResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    public readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets frontend IP addresses of application gateway resource
     */
    public readonly frontendIPConfigurations!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewayFrontendIPConfigurationResponse[] | undefined>;
    /**
     * Gets or sets frontend ports of application gateway resource
     */
    public readonly frontendPorts!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewayFrontendPortResponse[] | undefined>;
    /**
     * Gets or sets subnets of application gateway resource
     */
    public readonly gatewayIPConfigurations!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewayIPConfigurationResponse[] | undefined>;
    /**
     * Gets or sets HTTP listeners of application gateway resource
     */
    public readonly httpListeners!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewayHttpListenerResponse[] | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets operational state of application gateway resource
     */
    public /*out*/ readonly operationalState!: pulumi.Output<string>;
    /**
     * Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets request routing rules of application gateway resource
     */
    public readonly requestRoutingRules!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewayRequestRoutingRuleResponse[] | undefined>;
    /**
     * Gets or sets resource guid property of the ApplicationGateway resource
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets sku of application gateway resource
     */
    public readonly sku!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewaySkuResponse | undefined>;
    /**
     * Gets or sets ssl certificates of application gateway resource
     */
    public readonly sslCertificates!: pulumi.Output<outputs.network.v20150501preview.ApplicationGatewaySslCertificateResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApplicationGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.applicationGatewayName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'applicationGatewayName'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["applicationGatewayName"] = args ? args.applicationGatewayName : undefined;
            inputs["backendAddressPools"] = args ? args.backendAddressPools : undefined;
            inputs["backendHttpSettingsCollection"] = args ? args.backendHttpSettingsCollection : undefined;
            inputs["etag"] = args ? args.etag : undefined;
            inputs["frontendIPConfigurations"] = args ? args.frontendIPConfigurations : undefined;
            inputs["frontendPorts"] = args ? args.frontendPorts : undefined;
            inputs["gatewayIPConfigurations"] = args ? args.gatewayIPConfigurations : undefined;
            inputs["httpListeners"] = args ? args.httpListeners : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["provisioningState"] = args ? args.provisioningState : undefined;
            inputs["requestRoutingRules"] = args ? args.requestRoutingRules : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["sslCertificates"] = args ? args.sslCertificates : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["operationalState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["backendAddressPools"] = undefined /*out*/;
            inputs["backendHttpSettingsCollection"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["frontendIPConfigurations"] = undefined /*out*/;
            inputs["frontendPorts"] = undefined /*out*/;
            inputs["gatewayIPConfigurations"] = undefined /*out*/;
            inputs["httpListeners"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["operationalState"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["requestRoutingRules"] = undefined /*out*/;
            inputs["resourceGuid"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["sslCertificates"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:ApplicationGateway" }, { type: "azure-nextgen:network/v20150615:ApplicationGateway" }, { type: "azure-nextgen:network/v20160330:ApplicationGateway" }, { type: "azure-nextgen:network/v20160601:ApplicationGateway" }, { type: "azure-nextgen:network/v20160901:ApplicationGateway" }, { type: "azure-nextgen:network/v20161201:ApplicationGateway" }, { type: "azure-nextgen:network/v20170301:ApplicationGateway" }, { type: "azure-nextgen:network/v20170601:ApplicationGateway" }, { type: "azure-nextgen:network/v20170801:ApplicationGateway" }, { type: "azure-nextgen:network/v20170901:ApplicationGateway" }, { type: "azure-nextgen:network/v20171001:ApplicationGateway" }, { type: "azure-nextgen:network/v20171101:ApplicationGateway" }, { type: "azure-nextgen:network/v20180101:ApplicationGateway" }, { type: "azure-nextgen:network/v20180201:ApplicationGateway" }, { type: "azure-nextgen:network/v20180401:ApplicationGateway" }, { type: "azure-nextgen:network/v20180601:ApplicationGateway" }, { type: "azure-nextgen:network/v20180701:ApplicationGateway" }, { type: "azure-nextgen:network/v20180801:ApplicationGateway" }, { type: "azure-nextgen:network/v20181001:ApplicationGateway" }, { type: "azure-nextgen:network/v20181101:ApplicationGateway" }, { type: "azure-nextgen:network/v20181201:ApplicationGateway" }, { type: "azure-nextgen:network/v20190201:ApplicationGateway" }, { type: "azure-nextgen:network/v20190401:ApplicationGateway" }, { type: "azure-nextgen:network/v20190601:ApplicationGateway" }, { type: "azure-nextgen:network/v20190701:ApplicationGateway" }, { type: "azure-nextgen:network/v20190801:ApplicationGateway" }, { type: "azure-nextgen:network/v20190901:ApplicationGateway" }, { type: "azure-nextgen:network/v20191101:ApplicationGateway" }, { type: "azure-nextgen:network/v20191201:ApplicationGateway" }, { type: "azure-nextgen:network/v20200301:ApplicationGateway" }, { type: "azure-nextgen:network/v20200401:ApplicationGateway" }, { type: "azure-nextgen:network/v20200501:ApplicationGateway" }, { type: "azure-nextgen:network/v20200601:ApplicationGateway" }, { type: "azure-nextgen:network/v20200701:ApplicationGateway" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ApplicationGateway.__pulumiType, name, inputs, opts);
    }
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
    readonly backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * Gets or sets backend http settings of application gateway resource
     */
    readonly backendHttpSettingsCollection?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewayBackendHttpSettings>[]>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Gets or sets frontend IP addresses of application gateway resource
     */
    readonly frontendIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewayFrontendIPConfiguration>[]>;
    /**
     * Gets or sets frontend ports of application gateway resource
     */
    readonly frontendPorts?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewayFrontendPort>[]>;
    /**
     * Gets or sets subnets of application gateway resource
     */
    readonly gatewayIPConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewayIPConfiguration>[]>;
    /**
     * Gets or sets HTTP listeners of application gateway resource
     */
    readonly httpListeners?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewayHttpListener>[]>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Gets or sets Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Gets or sets request routing rules of application gateway resource
     */
    readonly requestRoutingRules?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource guid property of the ApplicationGateway resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Gets or sets sku of application gateway resource
     */
    readonly sku?: pulumi.Input<inputs.network.v20150501preview.ApplicationGatewaySku>;
    /**
     * Gets or sets ssl certificates of application gateway resource
     */
    readonly sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20150501preview.ApplicationGatewaySslCertificate>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
