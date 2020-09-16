import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Front Door represents a collection of backend endpoints to route traffic to along with rules that specify how traffic is sent there.
 */
export declare class FrontDoor extends pulumi.CustomResource {
    /**
     * Get an existing FrontDoor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FrontDoor;
    /**
     * Returns true if the given object is an instance of FrontDoor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FrontDoor;
    /**
     * Backend pools available to routing rules.
     */
    readonly backendPools: pulumi.Output<outputs.network.v20200501.BackendPoolResponse[] | undefined>;
    /**
     * Settings for all backendPools
     */
    readonly backendPoolsSettings: pulumi.Output<outputs.network.v20200501.BackendPoolsSettingsResponse | undefined>;
    /**
     * The host that each frontendEndpoint must CNAME to.
     */
    readonly cname: pulumi.Output<string>;
    /**
     * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
     */
    readonly enabledState: pulumi.Output<string | undefined>;
    /**
     * A friendly name for the frontDoor
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * The Id of the frontdoor.
     */
    readonly frontdoorId: pulumi.Output<string>;
    /**
     * Frontend endpoints available to routing rules.
     */
    readonly frontendEndpoints: pulumi.Output<outputs.network.v20200501.FrontendEndpointResponse[] | undefined>;
    /**
     * Health probe settings associated with this Front Door instance.
     */
    readonly healthProbeSettings: pulumi.Output<outputs.network.v20200501.HealthProbeSettingsModelResponse[] | undefined>;
    /**
     * Load balancing settings associated with this Front Door instance.
     */
    readonly loadBalancingSettings: pulumi.Output<outputs.network.v20200501.LoadBalancingSettingsModelResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the Front Door.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource status of the Front Door.
     */
    readonly resourceState: pulumi.Output<string | undefined>;
    /**
     * Routing rules associated with this Front Door.
     */
    readonly routingRules: pulumi.Output<outputs.network.v20200501.RoutingRuleResponse[] | undefined>;
    /**
     * Rules Engine Configurations available to routing rules.
     */
    readonly rulesEngines: pulumi.Output<outputs.network.v20200501.RulesEngineResponse[]>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a FrontDoor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FrontDoorArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FrontDoor resource.
 */
export interface FrontDoorArgs {
    /**
     * Backend pools available to routing rules.
     */
    readonly backendPools?: pulumi.Input<pulumi.Input<inputs.network.v20200501.BackendPool>[]>;
    /**
     * Settings for all backendPools
     */
    readonly backendPoolsSettings?: pulumi.Input<inputs.network.v20200501.BackendPoolsSettings>;
    /**
     * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
     */
    readonly enabledState?: pulumi.Input<string>;
    /**
     * A friendly name for the frontDoor
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * Name of the Front Door which is globally unique.
     */
    readonly frontDoorName: pulumi.Input<string>;
    /**
     * Frontend endpoints available to routing rules.
     */
    readonly frontendEndpoints?: pulumi.Input<pulumi.Input<inputs.network.v20200501.FrontendEndpoint>[]>;
    /**
     * Health probe settings associated with this Front Door instance.
     */
    readonly healthProbeSettings?: pulumi.Input<pulumi.Input<inputs.network.v20200501.HealthProbeSettingsModel>[]>;
    /**
     * Load balancing settings associated with this Front Door instance.
     */
    readonly loadBalancingSettings?: pulumi.Input<pulumi.Input<inputs.network.v20200501.LoadBalancingSettingsModel>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource status of the Front Door.
     */
    readonly resourceState?: pulumi.Input<string>;
    /**
     * Routing rules associated with this Front Door.
     */
    readonly routingRules?: pulumi.Input<pulumi.Input<inputs.network.v20200501.RoutingRule>[]>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
