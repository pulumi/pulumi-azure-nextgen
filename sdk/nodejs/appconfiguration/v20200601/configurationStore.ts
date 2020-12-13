// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it.
 */
export class ConfigurationStore extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConfigurationStore {
        return new ConfigurationStore(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:appconfiguration/v20200601:ConfigurationStore';

    /**
     * Returns true if the given object is an instance of ConfigurationStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigurationStore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigurationStore.__pulumiType;
    }

    /**
     * The creation date of configuration store.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The encryption settings of the configuration store.
     */
    public readonly encryption!: pulumi.Output<outputs.appconfiguration.v20200601.EncryptionPropertiesResponse | undefined>;
    /**
     * The DNS endpoint where the configuration store API will be available.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The managed identity information, if configured.
     */
    public readonly identity!: pulumi.Output<outputs.appconfiguration.v20200601.ResourceIdentityResponse | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of private endpoint connections that are set up for this resource.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<outputs.appconfiguration.v20200601.PrivateEndpointConnectionReferenceResponse[]>;
    /**
     * The provisioning state of the configuration store.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The sku of the configuration store.
     */
    public readonly sku!: pulumi.Output<outputs.appconfiguration.v20200601.SkuResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConfigurationStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationStoreArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.configStoreName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'configStoreName'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["configStoreName"] = args ? args.configStoreName : undefined;
            inputs["encryption"] = args ? args.encryption : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["creationDate"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["privateEndpointConnections"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["creationDate"] = undefined /*out*/;
            inputs["encryption"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["identity"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["privateEndpointConnections"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicNetworkAccess"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:appconfiguration/latest:ConfigurationStore" }, { type: "azure-nextgen:appconfiguration/v20190201preview:ConfigurationStore" }, { type: "azure-nextgen:appconfiguration/v20191001:ConfigurationStore" }, { type: "azure-nextgen:appconfiguration/v20191101preview:ConfigurationStore" }, { type: "azure-nextgen:appconfiguration/v20200701preview:ConfigurationStore" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ConfigurationStore.__pulumiType, name, inputs, opts);
    }
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
    readonly publicNetworkAccess?: pulumi.Input<string | enums.appconfiguration.v20200601.PublicNetworkAccess>;
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
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
