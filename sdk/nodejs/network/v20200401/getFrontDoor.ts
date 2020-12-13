// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getFrontDoor(args: GetFrontDoorArgs, opts?: pulumi.InvokeOptions): Promise<GetFrontDoorResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200401:getFrontDoor", {
        "frontDoorName": args.frontDoorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFrontDoorArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    readonly frontDoorName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * Front Door represents a collection of backend endpoints to route traffic to along with rules that specify how traffic is sent there.
 */
export interface GetFrontDoorResult {
    /**
     * Backend pools available to routing rules.
     */
    readonly backendPools?: outputs.network.v20200401.BackendPoolResponse[];
    /**
     * Settings for all backendPools
     */
    readonly backendPoolsSettings?: outputs.network.v20200401.BackendPoolsSettingsResponse;
    /**
     * The host that each frontendEndpoint must CNAME to.
     */
    readonly cname: string;
    /**
     * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
     */
    readonly enabledState?: string;
    /**
     * A friendly name for the frontDoor
     */
    readonly friendlyName?: string;
    /**
     * The Id of the frontdoor.
     */
    readonly frontdoorId: string;
    /**
     * Frontend endpoints available to routing rules.
     */
    readonly frontendEndpoints?: outputs.network.v20200401.FrontendEndpointResponse[];
    /**
     * Health probe settings associated with this Front Door instance.
     */
    readonly healthProbeSettings?: outputs.network.v20200401.HealthProbeSettingsModelResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Load balancing settings associated with this Front Door instance.
     */
    readonly loadBalancingSettings?: outputs.network.v20200401.LoadBalancingSettingsModelResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning state of the Front Door.
     */
    readonly provisioningState: string;
    /**
     * Resource status of the Front Door.
     */
    readonly resourceState: string;
    /**
     * Routing rules associated with this Front Door.
     */
    readonly routingRules?: outputs.network.v20200401.RoutingRuleResponse[];
    /**
     * Rules Engine Configurations available to routing rules.
     */
    readonly rulesEngines: outputs.network.v20200401.RulesEngineResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
