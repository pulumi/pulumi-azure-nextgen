// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * ExpressRouteConnection resource.
 * Latest API Version: 2020-07-01.
 */
export class ExpressRouteConnection extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteConnection {
        return new ExpressRouteConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/latest:ExpressRouteConnection';

    /**
     * Returns true if the given object is an instance of ExpressRouteConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRouteConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRouteConnection.__pulumiType;
    }

    /**
     * Authorization key to establish the connection.
     */
    public readonly authorizationKey!: pulumi.Output<string | undefined>;
    /**
     * Enable internet security.
     */
    public readonly enableInternetSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * The ExpressRoute circuit peering.
     */
    public readonly expressRouteCircuitPeering!: pulumi.Output<outputs.network.latest.ExpressRouteCircuitPeeringIdResponse>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the express route connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    public readonly routingConfiguration!: pulumi.Output<outputs.network.latest.RoutingConfigurationResponse | undefined>;
    /**
     * The routing weight associated to the connection.
     */
    public readonly routingWeight!: pulumi.Output<number | undefined>;

    /**
     * Create a ExpressRouteConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.connectionName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'connectionName'");
            }
            if ((!args || args.expressRouteCircuitPeering === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'expressRouteCircuitPeering'");
            }
            if ((!args || args.expressRouteGatewayName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'expressRouteGatewayName'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["authorizationKey"] = args ? args.authorizationKey : undefined;
            inputs["connectionName"] = args ? args.connectionName : undefined;
            inputs["enableInternetSecurity"] = args ? args.enableInternetSecurity : undefined;
            inputs["expressRouteCircuitPeering"] = args ? args.expressRouteCircuitPeering : undefined;
            inputs["expressRouteGatewayName"] = args ? args.expressRouteGatewayName : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["routingConfiguration"] = args ? args.routingConfiguration : undefined;
            inputs["routingWeight"] = args ? args.routingWeight : undefined;
            inputs["provisioningState"] = undefined /*out*/;
        } else {
            inputs["authorizationKey"] = undefined /*out*/;
            inputs["enableInternetSecurity"] = undefined /*out*/;
            inputs["expressRouteCircuitPeering"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["routingConfiguration"] = undefined /*out*/;
            inputs["routingWeight"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/v20180801:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20181001:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20181101:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20181201:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20190201:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20190401:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20190601:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20190701:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20190801:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20190901:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20191101:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20191201:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20200301:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20200401:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20200501:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20200601:ExpressRouteConnection" }, { type: "azure-nextgen:network/v20200701:ExpressRouteConnection" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ExpressRouteConnection.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRouteConnection resource.
 */
export interface ExpressRouteConnectionArgs {
    /**
     * Authorization key to establish the connection.
     */
    readonly authorizationKey?: pulumi.Input<string>;
    /**
     * The name of the connection subresource.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * The ExpressRoute circuit peering.
     */
    readonly expressRouteCircuitPeering: pulumi.Input<inputs.network.latest.ExpressRouteCircuitPeeringId>;
    /**
     * The name of the ExpressRoute gateway.
     */
    readonly expressRouteGatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: pulumi.Input<inputs.network.latest.RoutingConfiguration>;
    /**
     * The routing weight associated to the connection.
     */
    readonly routingWeight?: pulumi.Input<number>;
}
