// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * VnetRoute contract used to pass routing information for a vnet.
 */
export class ServerFarmRouteForVnet extends pulumi.CustomResource {
    /**
     * Get an existing ServerFarmRouteForVnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerFarmRouteForVnet {
        return new ServerFarmRouteForVnet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/v20150801:ServerFarmRouteForVnet';

    /**
     * Returns true if the given object is an instance of ServerFarmRouteForVnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerFarmRouteForVnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerFarmRouteForVnet.__pulumiType;
    }

    /**
     * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
     */
    public readonly endAddress!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The type of route this is:
     *             DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
     *             INHERITED - Routes inherited from the real Virtual Network routes
     *             STATIC - Static route set on the web app only
     *             
     *             These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
     *             with new INHERITED routes.
     */
    public readonly routeType!: pulumi.Output<string | undefined>;
    /**
     * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
     */
    public readonly startAddress!: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a ServerFarmRouteForVnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerFarmRouteForVnetArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.routeName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'routeName'");
            }
            if ((!args || args.vnetName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'vnetName'");
            }
            inputs["endAddress"] = args ? args.endAddress : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["routeName"] = args ? args.routeName : undefined;
            inputs["routeType"] = args ? args.routeType : undefined;
            inputs["startAddress"] = args ? args.startAddress : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["vnetName"] = args ? args.vnetName : undefined;
        } else {
            inputs["endAddress"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["routeType"] = undefined /*out*/;
            inputs["startAddress"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/latest:ServerFarmRouteForVnet" }, { type: "azure-nextgen:web/v20160901:ServerFarmRouteForVnet" }, { type: "azure-nextgen:web/v20180201:ServerFarmRouteForVnet" }, { type: "azure-nextgen:web/v20190801:ServerFarmRouteForVnet" }, { type: "azure-nextgen:web/v20200601:ServerFarmRouteForVnet" }, { type: "azure-nextgen:web/v20200901:ServerFarmRouteForVnet" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ServerFarmRouteForVnet.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerFarmRouteForVnet resource.
 */
export interface ServerFarmRouteForVnetArgs {
    /**
     * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
     */
    readonly endAddress?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the virtual network route
     */
    readonly routeName: pulumi.Input<string>;
    /**
     * The type of route this is:
     *             DEFAULT - By default, every web app has routes to the local address ranges specified by RFC1918
     *             INHERITED - Routes inherited from the real Virtual Network routes
     *             STATIC - Static route set on the web app only
     *             
     *             These values will be used for syncing a Web App's routes with those from a Virtual Network. This operation will clear all DEFAULT and INHERITED routes and replace them
     *             with new INHERITED routes.
     */
    readonly routeType?: pulumi.Input<string>;
    /**
     * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
     */
    readonly startAddress?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Name of virtual network
     */
    readonly vnetName: pulumi.Input<string>;
}
