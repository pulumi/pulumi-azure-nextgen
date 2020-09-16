import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The cluster resource
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * The available cluster code version which the cluster can upgrade to, note that you must choose upgradeMode to manual to upgrade to
     */
    readonly availableClusterVersions: pulumi.Output<outputs.servicefabric.v20160901.ClusterVersionDetailsResponse[]>;
    /**
     * The settings to enable AAD authentication on the cluster
     */
    readonly azureActiveDirectory: pulumi.Output<outputs.servicefabric.v20160901.AzureActiveDirectoryResponse | undefined>;
    /**
     * This primary certificate will be used as cluster node to node security, SSL certificate for cluster management endpoint and default admin client
     */
    readonly certificate: pulumi.Output<outputs.servicefabric.v20160901.CertificateDescriptionResponse | undefined>;
    /**
     *  List of client certificates to whitelist based on common names
     */
    readonly clientCertificateCommonNames: pulumi.Output<outputs.servicefabric.v20160901.ClientCertificateCommonNameResponse[] | undefined>;
    /**
     * The client thumbprint details ,it is used for client access for cluster operation
     */
    readonly clientCertificateThumbprints: pulumi.Output<outputs.servicefabric.v20160901.ClientCertificateThumbprintResponse[] | undefined>;
    /**
     * The ServiceFabric code version running in your cluster
     */
    readonly clusterCodeVersion: pulumi.Output<string | undefined>;
    /**
     * The endpoint for the cluster connecting to servicefabric resource provider
     */
    readonly clusterEndpoint: pulumi.Output<string>;
    /**
     * The unique identifier for the cluster resource
     */
    readonly clusterId: pulumi.Output<string>;
    /**
     * The state for the cluster
     */
    readonly clusterState: pulumi.Output<string>;
    /**
     * The storage diagnostics account configuration details
     */
    readonly diagnosticsStorageAccountConfig: pulumi.Output<outputs.servicefabric.v20160901.DiagnosticsStorageAccountConfigResponse | undefined>;
    /**
     * List of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings: pulumi.Output<outputs.servicefabric.v20160901.SettingsSectionDescriptionResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The http management endpoint of the cluster
     */
    readonly managementEndpoint: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The list of node types that make up the cluster
     */
    readonly nodeTypes: pulumi.Output<outputs.servicefabric.v20160901.NodeTypeDescriptionResponse[]>;
    /**
     * The provisioning state of the cluster resource
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Cluster reliability level indicates replica set size of system service
     */
    readonly reliabilityLevel: pulumi.Output<string | undefined>;
    /**
     * The server certificate used by reverse proxy
     */
    readonly reverseProxyCertificate: pulumi.Output<outputs.servicefabric.v20160901.CertificateDescriptionResponse | undefined>;
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
     * The policy to use when upgrading the cluster.
     */
    readonly upgradeDescription: pulumi.Output<outputs.servicefabric.v20160901.ClusterUpgradePolicyResponse | undefined>;
    /**
     * Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not
     */
    readonly upgradeMode: pulumi.Output<string | undefined>;
    /**
     * The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    readonly vmImage: pulumi.Output<string | undefined>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The settings to enable AAD authentication on the cluster
     */
    readonly azureActiveDirectory?: pulumi.Input<inputs.servicefabric.v20160901.AzureActiveDirectory>;
    /**
     * This primary certificate will be used as cluster node to node security, SSL certificate for cluster management endpoint and default admin client
     */
    readonly certificate?: pulumi.Input<inputs.servicefabric.v20160901.CertificateDescription>;
    /**
     *  List of client certificates to whitelist based on common names
     */
    readonly clientCertificateCommonNames?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20160901.ClientCertificateCommonName>[]>;
    /**
     * The client thumbprint details ,it is used for client access for cluster operation
     */
    readonly clientCertificateThumbprints?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20160901.ClientCertificateThumbprint>[]>;
    /**
     * The ServiceFabric code version running in your cluster
     */
    readonly clusterCodeVersion?: pulumi.Input<string>;
    /**
     * The name of the cluster resource
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The storage diagnostics account configuration details
     */
    readonly diagnosticsStorageAccountConfig?: pulumi.Input<inputs.servicefabric.v20160901.DiagnosticsStorageAccountConfig>;
    /**
     * List of custom fabric settings to configure the cluster.
     */
    readonly fabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20160901.SettingsSectionDescription>[]>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The http management endpoint of the cluster
     */
    readonly managementEndpoint: pulumi.Input<string>;
    /**
     * The list of node types that make up the cluster
     */
    readonly nodeTypes: pulumi.Input<pulumi.Input<inputs.servicefabric.v20160901.NodeTypeDescription>[]>;
    /**
     * Cluster reliability level indicates replica set size of system service
     */
    readonly reliabilityLevel?: pulumi.Input<string>;
    /**
     * The name of the resource group to which the resource belongs or get created
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The server certificate used by reverse proxy
     */
    readonly reverseProxyCertificate?: pulumi.Input<inputs.servicefabric.v20160901.CertificateDescription>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The policy to use when upgrading the cluster.
     */
    readonly upgradeDescription?: pulumi.Input<inputs.servicefabric.v20160901.ClusterUpgradePolicy>;
    /**
     * Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not
     */
    readonly upgradeMode?: pulumi.Input<string>;
    /**
     * The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
     */
    readonly vmImage?: pulumi.Input<string>;
}
