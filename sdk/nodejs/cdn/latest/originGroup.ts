// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
 * Latest API Version: 2020-09-01.
 */
export class OriginGroup extends pulumi.CustomResource {
    /**
     * Get an existing OriginGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OriginGroup {
        return new OriginGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:cdn/latest:OriginGroup';

    /**
     * Returns true if the given object is an instance of OriginGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OriginGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OriginGroup.__pulumiType;
    }

    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    public readonly healthProbeSettings!: pulumi.Output<outputs.cdn.latest.HealthProbeParametersResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    public readonly origins!: pulumi.Output<outputs.cdn.latest.ResourceReferenceResponse[]>;
    /**
     * Provisioning status of the origin group.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource status of the origin group.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    public readonly responseBasedOriginErrorDetectionSettings!: pulumi.Output<outputs.cdn.latest.ResponseBasedOriginErrorDetectionParametersResponse | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<outputs.cdn.latest.SystemDataResponse>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    public readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes!: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OriginGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OriginGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.endpointName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.originGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'originGroupName'");
            }
            if ((!args || args.origins === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'origins'");
            }
            if ((!args || args.profileName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["endpointName"] = args ? args.endpointName : undefined;
            inputs["healthProbeSettings"] = args ? args.healthProbeSettings : undefined;
            inputs["originGroupName"] = args ? args.originGroupName : undefined;
            inputs["origins"] = args ? args.origins : undefined;
            inputs["profileName"] = args ? args.profileName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["responseBasedOriginErrorDetectionSettings"] = args ? args.responseBasedOriginErrorDetectionSettings : undefined;
            inputs["trafficRestorationTimeToHealedOrNewEndpointsInMinutes"] = args ? args.trafficRestorationTimeToHealedOrNewEndpointsInMinutes : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["resourceState"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["healthProbeSettings"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["origins"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["resourceState"] = undefined /*out*/;
            inputs["responseBasedOriginErrorDetectionSettings"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["trafficRestorationTimeToHealedOrNewEndpointsInMinutes"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:cdn/v20191231:OriginGroup" }, { type: "azure-nextgen:cdn/v20200331:OriginGroup" }, { type: "azure-nextgen:cdn/v20200415:OriginGroup" }, { type: "azure-nextgen:cdn/v20200901:OriginGroup" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(OriginGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a OriginGroup resource.
 */
export interface OriginGroupArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    readonly healthProbeSettings?: pulumi.Input<inputs.cdn.latest.HealthProbeParameters>;
    /**
     * Name of the origin group which is unique within the endpoint.
     */
    readonly originGroupName: pulumi.Input<string>;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    readonly origins: pulumi.Input<pulumi.Input<inputs.cdn.latest.ResourceReference>[]>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    readonly responseBasedOriginErrorDetectionSettings?: pulumi.Input<inputs.cdn.latest.ResponseBasedOriginErrorDetectionParameters>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: pulumi.Input<number>;
}
