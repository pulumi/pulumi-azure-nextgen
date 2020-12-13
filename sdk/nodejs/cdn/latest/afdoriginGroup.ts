// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * AFDOrigin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
 */
export class AFDOriginGroup extends pulumi.CustomResource {
    /**
     * Get an existing AFDOriginGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AFDOriginGroup {
        return new AFDOriginGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:cdn/latest:AFDOriginGroup';

    /**
     * Returns true if the given object is an instance of AFDOriginGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AFDOriginGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AFDOriginGroup.__pulumiType;
    }

    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    public readonly healthProbeSettings!: pulumi.Output<outputs.cdn.latest.HealthProbeParametersResponse | undefined>;
    /**
     * Load balancing settings for a backend pool
     */
    public readonly loadBalancingSettings!: pulumi.Output<outputs.cdn.latest.LoadBalancingSettingsParametersResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    public readonly responseBasedAfdOriginErrorDetectionSettings!: pulumi.Output<outputs.cdn.latest.ResponseBasedOriginErrorDetectionParametersResponse | undefined>;
    /**
     * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
     */
    public readonly sessionAffinityState!: pulumi.Output<string | undefined>;
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
     * Create a AFDOriginGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AFDOriginGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.originGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'originGroupName'");
            }
            if ((!args || args.profileName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["healthProbeSettings"] = args ? args.healthProbeSettings : undefined;
            inputs["loadBalancingSettings"] = args ? args.loadBalancingSettings : undefined;
            inputs["originGroupName"] = args ? args.originGroupName : undefined;
            inputs["profileName"] = args ? args.profileName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["responseBasedAfdOriginErrorDetectionSettings"] = args ? args.responseBasedAfdOriginErrorDetectionSettings : undefined;
            inputs["sessionAffinityState"] = args ? args.sessionAffinityState : undefined;
            inputs["trafficRestorationTimeToHealedOrNewEndpointsInMinutes"] = args ? args.trafficRestorationTimeToHealedOrNewEndpointsInMinutes : undefined;
            inputs["deploymentStatus"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["deploymentStatus"] = undefined /*out*/;
            inputs["healthProbeSettings"] = undefined /*out*/;
            inputs["loadBalancingSettings"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["responseBasedAfdOriginErrorDetectionSettings"] = undefined /*out*/;
            inputs["sessionAffinityState"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-nextgen:cdn/v20200901:AFDOriginGroup" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(AFDOriginGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a AFDOriginGroup resource.
 */
export interface AFDOriginGroupArgs {
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    readonly healthProbeSettings?: pulumi.Input<inputs.cdn.latest.HealthProbeParameters>;
    /**
     * Load balancing settings for a backend pool
     */
    readonly loadBalancingSettings?: pulumi.Input<inputs.cdn.latest.LoadBalancingSettingsParameters>;
    /**
     * Name of the origin group which is unique within the endpoint.
     */
    readonly originGroupName: pulumi.Input<string>;
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
    readonly responseBasedAfdOriginErrorDetectionSettings?: pulumi.Input<inputs.cdn.latest.ResponseBasedOriginErrorDetectionParameters>;
    /**
     * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
     */
    readonly sessionAffinityState?: pulumi.Input<string | enums.cdn.latest.EnabledState>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: pulumi.Input<number>;
}
