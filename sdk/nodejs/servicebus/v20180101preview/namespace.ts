// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Description of a namespace resource.
 */
export class Namespace extends pulumi.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Namespace {
        return new Namespace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:servicebus/v20180101preview:Namespace';

    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Namespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Namespace.__pulumiType;
    }

    /**
     * The time the namespace was created
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    public readonly keySource!: pulumi.Output<string | undefined>;
    /**
     * Properties of KeyVault
     */
    public readonly keyVaultProperties!: pulumi.Output<outputs.servicebus.v20180101preview.KeyVaultPropertiesResponse | undefined>;
    /**
     * The Geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Identifier for Azure Insights metrics
     */
    public /*out*/ readonly metricId!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ObjectId from the KeyVault
     */
    public readonly principalId!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the namespace.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Endpoint you can use to perform Service Bus operations.
     */
    public /*out*/ readonly serviceBusEndpoint!: pulumi.Output<string>;
    /**
     * Properties of SKU
     */
    public readonly sku!: pulumi.Output<outputs.servicebus.v20180101preview.SBSkuResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * TenantId from the KeyVault
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The time the namespace was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.namespaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["keySource"] = args ? args.keySource : undefined;
            inputs["keyVaultProperties"] = args ? args.keyVaultProperties : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["principalId"] = args ? args.principalId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            inputs["createdAt"] = undefined /*out*/;
            inputs["metricId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["serviceBusEndpoint"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
        } else {
            inputs["createdAt"] = undefined /*out*/;
            inputs["keySource"] = undefined /*out*/;
            inputs["keyVaultProperties"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["metricId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["principalId"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["serviceBusEndpoint"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["tenantId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
            inputs["zoneRedundant"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:servicebus/latest:Namespace" }, { type: "azure-nextgen:servicebus/v20140901:Namespace" }, { type: "azure-nextgen:servicebus/v20150801:Namespace" }, { type: "azure-nextgen:servicebus/v20170401:Namespace" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Namespace.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * Enumerates the possible value of keySource for Encryption
     */
    readonly keySource?: pulumi.Input<enums.servicebus.v20180101preview.KeySource>;
    /**
     * Properties of KeyVault
     */
    readonly keyVaultProperties?: pulumi.Input<inputs.servicebus.v20180101preview.KeyVaultProperties>;
    /**
     * The Geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * ObjectId from the KeyVault
     */
    readonly principalId?: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Properties of SKU
     */
    readonly sku?: pulumi.Input<inputs.servicebus.v20180101preview.SBSku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * TenantId from the KeyVault
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Enumerates the possible value Identity type, which currently supports only 'SystemAssigned'
     */
    readonly type?: pulumi.Input<enums.servicebus.v20180101preview.IdentityType>;
    /**
     * Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.
     */
    readonly zoneRedundant?: pulumi.Input<boolean>;
}
