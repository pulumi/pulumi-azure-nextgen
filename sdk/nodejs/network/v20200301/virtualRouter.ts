// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * VirtualRouter Resource.
 */
export class VirtualRouter extends pulumi.CustomResource {
    /**
     * Get an existing VirtualRouter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualRouter {
        return new VirtualRouter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20200301:VirtualRouter';

    /**
     * Returns true if the given object is an instance of VirtualRouter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualRouter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualRouter.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The Gateway on which VirtualRouter is hosted.
     */
    public readonly hostedGateway!: pulumi.Output<outputs.network.v20200301.SubResourceResponse | undefined>;
    /**
     * The Subnet on which VirtualRouter is hosted.
     */
    public readonly hostedSubnet!: pulumi.Output<outputs.network.v20200301.SubResourceResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of references to VirtualRouterPeerings.
     */
    public /*out*/ readonly peerings!: pulumi.Output<outputs.network.v20200301.SubResourceResponse[]>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * VirtualRouter ASN.
     */
    public readonly virtualRouterAsn!: pulumi.Output<number | undefined>;
    /**
     * VirtualRouter IPs.
     */
    public readonly virtualRouterIps!: pulumi.Output<string[] | undefined>;

    /**
     * Create a VirtualRouter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualRouterArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualRouterName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'virtualRouterName'");
            }
            inputs["hostedGateway"] = args ? args.hostedGateway : undefined;
            inputs["hostedSubnet"] = args ? args.hostedSubnet : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualRouterAsn"] = args ? args.virtualRouterAsn : undefined;
            inputs["virtualRouterIps"] = args ? args.virtualRouterIps : undefined;
            inputs["virtualRouterName"] = args ? args.virtualRouterName : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["peerings"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["etag"] = undefined /*out*/;
            inputs["hostedGateway"] = undefined /*out*/;
            inputs["hostedSubnet"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["peerings"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualRouterAsn"] = undefined /*out*/;
            inputs["virtualRouterIps"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:VirtualRouter" }, { type: "azure-nextgen:network/v20190701:VirtualRouter" }, { type: "azure-nextgen:network/v20190801:VirtualRouter" }, { type: "azure-nextgen:network/v20190901:VirtualRouter" }, { type: "azure-nextgen:network/v20191101:VirtualRouter" }, { type: "azure-nextgen:network/v20191201:VirtualRouter" }, { type: "azure-nextgen:network/v20200401:VirtualRouter" }, { type: "azure-nextgen:network/v20200501:VirtualRouter" }, { type: "azure-nextgen:network/v20200601:VirtualRouter" }, { type: "azure-nextgen:network/v20200701:VirtualRouter" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(VirtualRouter.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualRouter resource.
 */
export interface VirtualRouterArgs {
    /**
     * The Gateway on which VirtualRouter is hosted.
     */
    readonly hostedGateway?: pulumi.Input<inputs.network.v20200301.SubResource>;
    /**
     * The Subnet on which VirtualRouter is hosted.
     */
    readonly hostedSubnet?: pulumi.Input<inputs.network.v20200301.SubResource>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VirtualRouter ASN.
     */
    readonly virtualRouterAsn?: pulumi.Input<number>;
    /**
     * VirtualRouter IPs.
     */
    readonly virtualRouterIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Virtual Router.
     */
    readonly virtualRouterName: pulumi.Input<string>;
}
