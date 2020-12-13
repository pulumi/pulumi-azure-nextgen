// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Peering Service
 */
export class PeeringService extends pulumi.CustomResource {
    /**
     * Get an existing PeeringService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PeeringService {
        return new PeeringService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:peering/v20201001:PeeringService';

    /**
     * Returns true if the given object is an instance of PeeringService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PeeringService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PeeringService.__pulumiType;
    }

    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The PeeringServiceLocation of the Customer.
     */
    public readonly peeringServiceLocation!: pulumi.Output<string | undefined>;
    /**
     * The MAPS Provider Name.
     */
    public readonly peeringServiceProvider!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU that defines the type of the peering service.
     */
    public readonly sku!: pulumi.Output<outputs.peering.v20201001.PeeringServiceSkuResponse | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PeeringService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PeeringServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.peeringServiceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'peeringServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["location"] = args ? args.location : undefined;
            inputs["peeringServiceLocation"] = args ? args.peeringServiceLocation : undefined;
            inputs["peeringServiceName"] = args ? args.peeringServiceName : undefined;
            inputs["peeringServiceProvider"] = args ? args.peeringServiceProvider : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["peeringServiceLocation"] = undefined /*out*/;
            inputs["peeringServiceProvider"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-nextgen:peering/latest:PeeringService" }, { type: "azure-nextgen:peering/v20190801preview:PeeringService" }, { type: "azure-nextgen:peering/v20190901preview:PeeringService" }, { type: "azure-nextgen:peering/v20200101preview:PeeringService" }, { type: "azure-nextgen:peering/v20200401:PeeringService" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(PeeringService.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a PeeringService resource.
 */
export interface PeeringServiceArgs {
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The PeeringServiceLocation of the Customer.
     */
    readonly peeringServiceLocation?: pulumi.Input<string>;
    /**
     * The name of the peering service.
     */
    readonly peeringServiceName: pulumi.Input<string>;
    /**
     * The MAPS Provider Name.
     */
    readonly peeringServiceProvider?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU that defines the type of the peering service.
     */
    readonly sku?: pulumi.Input<inputs.peering.v20201001.PeeringServiceSku>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
