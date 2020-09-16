import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A class represent a SignalR service resource.
 */
export declare class SignalR extends pulumi.CustomResource {
    /**
     * Get an existing SignalR resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SignalR;
    /**
     * Returns true if the given object is an instance of SignalR.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SignalR;
    /**
     * Cross-Origin Resource Sharing (CORS) settings.
     */
    readonly cors: pulumi.Output<outputs.signalrservice.v20181001.SignalRCorsSettingsResponse | undefined>;
    /**
     * The publicly accessible IP of the SignalR service.
     */
    readonly externalIP: pulumi.Output<string>;
    /**
     * List of SignalR featureFlags. e.g. ServiceMode.
     *
     * FeatureFlags that are not included in the parameters for the update operation will not be modified.
     * And the response will only include featureFlags that are explicitly set.
     * When a featureFlag is not explicitly set, SignalR service will use its globally default value.
     * But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
     */
    readonly features: pulumi.Output<outputs.signalrservice.v20181001.SignalRFeatureResponse[] | undefined>;
    /**
     * FQDN of the SignalR service instance. Format: xxx.service.signalr.net
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * Prefix for the hostName of the SignalR service. Retained for future use.
     * The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
     */
    readonly hostNamePrefix: pulumi.Output<string | undefined>;
    /**
     * The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The publicly accessible port of the SignalR service which is designed for browser/client side usage.
     */
    readonly publicPort: pulumi.Output<number>;
    /**
     * The publicly accessible port of the SignalR service which is designed for customer server side usage.
     */
    readonly serverPort: pulumi.Output<number>;
    /**
     * SKU of the service.
     */
    readonly sku: pulumi.Output<outputs.signalrservice.v20181001.ResourceSkuResponse | undefined>;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the service - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: pulumi.Output<string>;
    /**
     * Version of the SignalR resource. Probably you need the same or higher version of client SDKs.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a SignalR resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SignalRArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SignalR resource.
 */
export interface SignalRArgs {
    /**
     * Azure GEO region: e.g. West US | East US | North Central US | South Central US | West Europe | North Europe | East Asia | Southeast Asia | etc.
     * The geo region of a resource never changes after it is created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Settings used to provision or configure the resource
     */
    readonly properties?: pulumi.Input<inputs.signalrservice.v20181001.SignalRCreateOrUpdateProperties>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SignalR resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The billing information of the resource.(e.g. basic vs. standard)
     */
    readonly sku?: pulumi.Input<inputs.signalrservice.v20181001.ResourceSku>;
    /**
     * A list of key value pairs that describe the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
