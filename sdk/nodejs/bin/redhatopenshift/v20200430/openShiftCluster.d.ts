import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * OpenShiftCluster represents an Azure Red Hat OpenShift cluster.
 */
export declare class OpenShiftCluster extends pulumi.CustomResource {
    /**
     * Get an existing OpenShiftCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OpenShiftCluster;
    /**
     * Returns true if the given object is an instance of OpenShiftCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OpenShiftCluster;
    /**
     * The cluster API server profile.
     */
    readonly apiserverProfile: pulumi.Output<outputs.redhatopenshift.v20200430.APIServerProfileResponse | undefined>;
    /**
     * The cluster profile.
     */
    readonly clusterProfile: pulumi.Output<outputs.redhatopenshift.v20200430.ClusterProfileResponse | undefined>;
    /**
     * The console profile.
     */
    readonly consoleProfile: pulumi.Output<outputs.redhatopenshift.v20200430.ConsoleProfileResponse | undefined>;
    /**
     * The cluster ingress profiles.
     */
    readonly ingressProfiles: pulumi.Output<outputs.redhatopenshift.v20200430.IngressProfileResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Output<string>;
    /**
     * The cluster master profile.
     */
    readonly masterProfile: pulumi.Output<outputs.redhatopenshift.v20200430.MasterProfileResponse | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The cluster network profile.
     */
    readonly networkProfile: pulumi.Output<outputs.redhatopenshift.v20200430.NetworkProfileResponse | undefined>;
    /**
     * The cluster provisioning state (immutable).
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The cluster service principal profile.
     */
    readonly servicePrincipalProfile: pulumi.Output<outputs.redhatopenshift.v20200430.ServicePrincipalProfileResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The cluster worker profiles.
     */
    readonly workerProfiles: pulumi.Output<outputs.redhatopenshift.v20200430.WorkerProfileResponse[] | undefined>;
    /**
     * Create a OpenShiftCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenShiftClusterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a OpenShiftCluster resource.
 */
export interface OpenShiftClusterArgs {
    /**
     * The cluster API server profile.
     */
    readonly apiserverProfile?: pulumi.Input<inputs.redhatopenshift.v20200430.APIServerProfile>;
    /**
     * The cluster profile.
     */
    readonly clusterProfile?: pulumi.Input<inputs.redhatopenshift.v20200430.ClusterProfile>;
    /**
     * The console profile.
     */
    readonly consoleProfile?: pulumi.Input<inputs.redhatopenshift.v20200430.ConsoleProfile>;
    /**
     * The cluster ingress profiles.
     */
    readonly ingressProfiles?: pulumi.Input<pulumi.Input<inputs.redhatopenshift.v20200430.IngressProfile>[]>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * The cluster master profile.
     */
    readonly masterProfile?: pulumi.Input<inputs.redhatopenshift.v20200430.MasterProfile>;
    /**
     * The cluster network profile.
     */
    readonly networkProfile?: pulumi.Input<inputs.redhatopenshift.v20200430.NetworkProfile>;
    /**
     * The cluster provisioning state (immutable).
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The cluster service principal profile.
     */
    readonly servicePrincipalProfile?: pulumi.Input<inputs.redhatopenshift.v20200430.ServicePrincipalProfile>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The cluster worker profiles.
     */
    readonly workerProfiles?: pulumi.Input<pulumi.Input<inputs.redhatopenshift.v20200430.WorkerProfile>[]>;
}
