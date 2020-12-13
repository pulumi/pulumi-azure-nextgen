// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * OpenShift Managed cluster.
 */
export class OpenShiftManagedCluster extends pulumi.CustomResource {
    /**
     * Get an existing OpenShiftManagedCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OpenShiftManagedCluster {
        return new OpenShiftManagedCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:containerservice/v20191027preview:OpenShiftManagedCluster';

    /**
     * Returns true if the given object is an instance of OpenShiftManagedCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OpenShiftManagedCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OpenShiftManagedCluster.__pulumiType;
    }

    /**
     * Configuration of OpenShift cluster VMs.
     */
    public readonly agentPoolProfiles!: pulumi.Output<outputs.containerservice.v20191027preview.OpenShiftManagedClusterAgentPoolProfileResponse[] | undefined>;
    /**
     * Configures OpenShift authentication.
     */
    public readonly authProfile!: pulumi.Output<outputs.containerservice.v20191027preview.OpenShiftManagedClusterAuthProfileResponse | undefined>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    public /*out*/ readonly clusterVersion!: pulumi.Output<string>;
    /**
     * Service generated FQDN for OpenShift API server loadbalancer internal hostname.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Configuration for OpenShift master VMs.
     */
    public readonly masterPoolProfile!: pulumi.Output<outputs.containerservice.v20191027preview.OpenShiftManagedClusterMasterPoolProfileResponse | undefined>;
    /**
     * Configures Log Analytics integration.
     */
    public readonly monitorProfile!: pulumi.Output<outputs.containerservice.v20191027preview.OpenShiftManagedClusterMonitorProfileResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Configuration for OpenShift networking.
     */
    public readonly networkProfile!: pulumi.Output<outputs.containerservice.v20191027preview.NetworkProfileResponse | undefined>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    public readonly openShiftVersion!: pulumi.Output<string>;
    /**
     * Define the resource plan as required by ARM for billing purposes
     */
    public readonly plan!: pulumi.Output<outputs.containerservice.v20191027preview.PurchasePlanResponse | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Service generated FQDN or private IP for OpenShift API server.
     */
    public /*out*/ readonly publicHostname!: pulumi.Output<string>;
    /**
     * Allows node rotation
     */
    public readonly refreshCluster!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration for OpenShift router(s).
     */
    public readonly routerProfiles!: pulumi.Output<outputs.containerservice.v20191027preview.OpenShiftRouterProfileResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OpenShiftManagedCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenShiftManagedClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.openShiftVersion === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'openShiftVersion'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            inputs["agentPoolProfiles"] = args ? args.agentPoolProfiles : undefined;
            inputs["authProfile"] = args ? args.authProfile : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["masterPoolProfile"] = args ? args.masterPoolProfile : undefined;
            inputs["monitorProfile"] = args ? args.monitorProfile : undefined;
            inputs["networkProfile"] = args ? args.networkProfile : undefined;
            inputs["openShiftVersion"] = args ? args.openShiftVersion : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["refreshCluster"] = args ? args.refreshCluster : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
            inputs["routerProfiles"] = args ? args.routerProfiles : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["clusterVersion"] = undefined /*out*/;
            inputs["fqdn"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicHostname"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["agentPoolProfiles"] = undefined /*out*/;
            inputs["authProfile"] = undefined /*out*/;
            inputs["clusterVersion"] = undefined /*out*/;
            inputs["fqdn"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["masterPoolProfile"] = undefined /*out*/;
            inputs["monitorProfile"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["networkProfile"] = undefined /*out*/;
            inputs["openShiftVersion"] = undefined /*out*/;
            inputs["plan"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["publicHostname"] = undefined /*out*/;
            inputs["refreshCluster"] = undefined /*out*/;
            inputs["routerProfiles"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:containerservice/latest:OpenShiftManagedCluster" }, { type: "azure-nextgen:containerservice/v20180930preview:OpenShiftManagedCluster" }, { type: "azure-nextgen:containerservice/v20190430:OpenShiftManagedCluster" }, { type: "azure-nextgen:containerservice/v20190930preview:OpenShiftManagedCluster" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(OpenShiftManagedCluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a OpenShiftManagedCluster resource.
 */
export interface OpenShiftManagedClusterArgs {
    /**
     * Configuration of OpenShift cluster VMs.
     */
    readonly agentPoolProfiles?: pulumi.Input<pulumi.Input<inputs.containerservice.v20191027preview.OpenShiftManagedClusterAgentPoolProfile>[]>;
    /**
     * Configures OpenShift authentication.
     */
    readonly authProfile?: pulumi.Input<inputs.containerservice.v20191027preview.OpenShiftManagedClusterAuthProfile>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Configuration for OpenShift master VMs.
     */
    readonly masterPoolProfile?: pulumi.Input<inputs.containerservice.v20191027preview.OpenShiftManagedClusterMasterPoolProfile>;
    /**
     * Configures Log Analytics integration.
     */
    readonly monitorProfile?: pulumi.Input<inputs.containerservice.v20191027preview.OpenShiftManagedClusterMonitorProfile>;
    /**
     * Configuration for OpenShift networking.
     */
    readonly networkProfile?: pulumi.Input<inputs.containerservice.v20191027preview.NetworkProfile>;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    readonly openShiftVersion: pulumi.Input<string>;
    /**
     * Define the resource plan as required by ARM for billing purposes
     */
    readonly plan?: pulumi.Input<inputs.containerservice.v20191027preview.PurchasePlan>;
    /**
     * Allows node rotation
     */
    readonly refreshCluster?: pulumi.Input<boolean>;
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
    readonly routerProfiles?: pulumi.Input<pulumi.Input<inputs.containerservice.v20191027preview.OpenShiftRouterProfile>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
