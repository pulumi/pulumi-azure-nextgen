import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * OpenShift Managed cluster.
 */
export declare class OpenShiftManagedCluster extends pulumi.CustomResource {
    /**
     * Get an existing OpenShiftManagedCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OpenShiftManagedCluster;
    /**
     * Returns true if the given object is an instance of OpenShiftManagedCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OpenShiftManagedCluster;
    /**
     * Configuration of OpenShift cluster VMs.
     */
    readonly agentPoolProfiles: pulumi.Output<outputs.containerservice.v20190430.OpenShiftManagedClusterAgentPoolProfileResponse[] | undefined>;
    /**
     * Configures OpenShift authentication.
     */
    readonly authProfile: pulumi.Output<outputs.containerservice.v20190430.OpenShiftManagedClusterAuthProfileResponse | undefined>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    readonly clusterVersion: pulumi.Output<string>;
    /**
     * Service generated FQDN for OpenShift API server loadbalancer internal hostname.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Configuration for OpenShift master VMs.
     */
    readonly masterPoolProfile: pulumi.Output<outputs.containerservice.v20190430.OpenShiftManagedClusterMasterPoolProfileResponse | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Configuration for OpenShift networking.
     */
    readonly networkProfile: pulumi.Output<outputs.containerservice.v20190430.NetworkProfileResponse | undefined>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    readonly openShiftVersion: pulumi.Output<string>;
    /**
     * Define the resource plan as required by ARM for billing purposes
     */
    readonly plan: pulumi.Output<outputs.containerservice.v20190430.PurchasePlanResponse | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Service generated FQDN for OpenShift API server.
     */
    readonly publicHostname: pulumi.Output<string>;
    /**
     * Configuration for OpenShift router(s).
     */
    readonly routerProfiles: pulumi.Output<outputs.containerservice.v20190430.OpenShiftRouterProfileResponse[] | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a OpenShiftManagedCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenShiftManagedClusterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a OpenShiftManagedCluster resource.
 */
export interface OpenShiftManagedClusterArgs {
    /**
     * Configuration of OpenShift cluster VMs.
     */
    readonly agentPoolProfiles?: pulumi.Input<pulumi.Input<inputs.containerservice.v20190430.OpenShiftManagedClusterAgentPoolProfile>[]>;
    /**
     * Configures OpenShift authentication.
     */
    readonly authProfile?: pulumi.Input<inputs.containerservice.v20190430.OpenShiftManagedClusterAuthProfile>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Configuration for OpenShift master VMs.
     */
    readonly masterPoolProfile?: pulumi.Input<inputs.containerservice.v20190430.OpenShiftManagedClusterMasterPoolProfile>;
    /**
     * Configuration for OpenShift networking.
     */
    readonly networkProfile?: pulumi.Input<inputs.containerservice.v20190430.NetworkProfile>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    readonly openShiftVersion: pulumi.Input<string>;
    /**
     * Define the resource plan as required by ARM for billing purposes
     */
    readonly plan?: pulumi.Input<inputs.containerservice.v20190430.PurchasePlan>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift managed cluster resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Configuration for OpenShift router(s).
     */
    readonly routerProfiles?: pulumi.Input<pulumi.Input<inputs.containerservice.v20190430.OpenShiftRouterProfile>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
