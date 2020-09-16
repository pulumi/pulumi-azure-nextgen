import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getOpenShiftCluster(args: GetOpenShiftClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenShiftClusterResult>;
export interface GetOpenShiftClusterArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    readonly resourceName: string;
}
/**
 * OpenShiftCluster represents an Azure Red Hat OpenShift cluster.
 */
export interface GetOpenShiftClusterResult {
    /**
     * The cluster API server profile.
     */
    readonly apiserverProfile?: outputs.redhatopenshift.v20200430.APIServerProfileResponse;
    /**
     * The cluster profile.
     */
    readonly clusterProfile?: outputs.redhatopenshift.v20200430.ClusterProfileResponse;
    /**
     * The console profile.
     */
    readonly consoleProfile?: outputs.redhatopenshift.v20200430.ConsoleProfileResponse;
    /**
     * The cluster ingress profiles.
     */
    readonly ingressProfiles?: outputs.redhatopenshift.v20200430.IngressProfileResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The cluster master profile.
     */
    readonly masterProfile?: outputs.redhatopenshift.v20200430.MasterProfileResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The cluster network profile.
     */
    readonly networkProfile?: outputs.redhatopenshift.v20200430.NetworkProfileResponse;
    /**
     * The cluster provisioning state (immutable).
     */
    readonly provisioningState?: string;
    /**
     * The cluster service principal profile.
     */
    readonly servicePrincipalProfile?: outputs.redhatopenshift.v20200430.ServicePrincipalProfileResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The cluster worker profiles.
     */
    readonly workerProfiles?: outputs.redhatopenshift.v20200430.WorkerProfileResponse[];
}
