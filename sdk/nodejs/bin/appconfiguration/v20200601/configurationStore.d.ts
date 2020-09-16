import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it.
 */
export declare class ConfigurationStore extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConfigurationStore;
    /**
     * Returns true if the given object is an instance of ConfigurationStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConfigurationStore;
    /**
     * The creation date of configuration store.
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * The encryption settings of the configuration store.
     */
    readonly encryption: pulumi.Output<outputs.appconfiguration.v20200601.EncryptionPropertiesResponse | undefined>;
    /**
     * The DNS endpoint where the configuration store API will be available.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * The managed identity information, if configured.
     */
    readonly identity: pulumi.Output<outputs.appconfiguration.v20200601.ResourceIdentityResponse | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    readonly privateEndpointConnections: pulumi.Output<outputs.appconfiguration.v20200601.PrivateEndpointConnectionReferenceResponse[]>;
    /**
     * The provisioning state of the configuration store.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    readonly publicNetworkAccess: pulumi.Output<string | undefined>;
    /**
     * The sku of the configuration store.
     */
    readonly sku: pulumi.Output<outputs.appconfiguration.v20200601.SkuResponse>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ConfigurationStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationStoreArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ConfigurationStore resource.
 */
export interface ConfigurationStoreArgs {
    /**
     * The name of the configuration store.
     */
    readonly configStoreName: pulumi.Input<string>;
    /**
     * The encryption settings of the configuration store.
     */
    readonly encryption?: pulumi.Input<inputs.appconfiguration.v20200601.EncryptionProperties>;
    /**
     * The managed identity information, if configured.
     */
    readonly identity?: pulumi.Input<inputs.appconfiguration.v20200601.ResourceIdentity>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    readonly publicNetworkAccess?: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the configuration store.
     */
    readonly sku: pulumi.Input<inputs.appconfiguration.v20200601.Sku>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
