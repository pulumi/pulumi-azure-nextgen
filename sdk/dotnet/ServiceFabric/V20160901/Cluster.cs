// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20160901
{
    /// <summary>
    /// The cluster resource
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:servicefabric/v20160901:Cluster")]
    public partial class Cluster : Pulumi.CustomResource
    {
        /// <summary>
        /// The available cluster code version which the cluster can upgrade to, note that you must choose upgradeMode to manual to upgrade to
        /// </summary>
        [Output("availableClusterVersions")]
        public Output<ImmutableArray<Outputs.ClusterVersionDetailsResponse>> AvailableClusterVersions { get; private set; } = null!;

        /// <summary>
        /// The settings to enable AAD authentication on the cluster
        /// </summary>
        [Output("azureActiveDirectory")]
        public Output<Outputs.AzureActiveDirectoryResponse?> AzureActiveDirectory { get; private set; } = null!;

        /// <summary>
        /// This primary certificate will be used as cluster node to node security, SSL certificate for cluster management endpoint and default admin client
        /// </summary>
        [Output("certificate")]
        public Output<Outputs.CertificateDescriptionResponse?> Certificate { get; private set; } = null!;

        /// <summary>
        ///  List of client certificates to whitelist based on common names
        /// </summary>
        [Output("clientCertificateCommonNames")]
        public Output<ImmutableArray<Outputs.ClientCertificateCommonNameResponse>> ClientCertificateCommonNames { get; private set; } = null!;

        /// <summary>
        /// The client thumbprint details ,it is used for client access for cluster operation
        /// </summary>
        [Output("clientCertificateThumbprints")]
        public Output<ImmutableArray<Outputs.ClientCertificateThumbprintResponse>> ClientCertificateThumbprints { get; private set; } = null!;

        /// <summary>
        /// The ServiceFabric code version running in your cluster
        /// </summary>
        [Output("clusterCodeVersion")]
        public Output<string?> ClusterCodeVersion { get; private set; } = null!;

        /// <summary>
        /// The endpoint for the cluster connecting to servicefabric resource provider
        /// </summary>
        [Output("clusterEndpoint")]
        public Output<string> ClusterEndpoint { get; private set; } = null!;

        /// <summary>
        /// The unique identifier for the cluster resource
        /// </summary>
        [Output("clusterId")]
        public Output<string> ClusterId { get; private set; } = null!;

        /// <summary>
        /// The state for the cluster
        /// </summary>
        [Output("clusterState")]
        public Output<string> ClusterState { get; private set; } = null!;

        /// <summary>
        /// The storage diagnostics account configuration details
        /// </summary>
        [Output("diagnosticsStorageAccountConfig")]
        public Output<Outputs.DiagnosticsStorageAccountConfigResponse?> DiagnosticsStorageAccountConfig { get; private set; } = null!;

        /// <summary>
        /// List of custom fabric settings to configure the cluster.
        /// </summary>
        [Output("fabricSettings")]
        public Output<ImmutableArray<Outputs.SettingsSectionDescriptionResponse>> FabricSettings { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The http management endpoint of the cluster
        /// </summary>
        [Output("managementEndpoint")]
        public Output<string> ManagementEndpoint { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The list of node types that make up the cluster
        /// </summary>
        [Output("nodeTypes")]
        public Output<ImmutableArray<Outputs.NodeTypeDescriptionResponse>> NodeTypes { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the cluster resource
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Cluster reliability level indicates replica set size of system service
        /// </summary>
        [Output("reliabilityLevel")]
        public Output<string?> ReliabilityLevel { get; private set; } = null!;

        /// <summary>
        /// The server certificate used by reverse proxy
        /// </summary>
        [Output("reverseProxyCertificate")]
        public Output<Outputs.CertificateDescriptionResponse?> ReverseProxyCertificate { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The policy to use when upgrading the cluster.
        /// </summary>
        [Output("upgradeDescription")]
        public Output<Outputs.ClusterUpgradePolicyResponse?> UpgradeDescription { get; private set; } = null!;

        /// <summary>
        /// Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not
        /// </summary>
        [Output("upgradeMode")]
        public Output<string?> UpgradeMode { get; private set; } = null!;

        /// <summary>
        /// The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
        /// </summary>
        [Output("vmImage")]
        public Output<string?> VmImage { get; private set; } = null!;


        /// <summary>
        /// Create a Cluster resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Cluster(string name, ClusterArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:servicefabric/v20160901:Cluster", name, args ?? new ClusterArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Cluster(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:servicefabric/v20160901:Cluster", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/latest:Cluster"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20170701preview:Cluster"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20180201:Cluster"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190301:Cluster"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190301preview:Cluster"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190601preview:Cluster"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20191101preview:Cluster"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20200301:Cluster"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Cluster resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Cluster Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Cluster(name, id, options);
        }
    }

    public sealed class ClusterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The settings to enable AAD authentication on the cluster
        /// </summary>
        [Input("azureActiveDirectory")]
        public Input<Inputs.AzureActiveDirectoryArgs>? AzureActiveDirectory { get; set; }

        /// <summary>
        /// This primary certificate will be used as cluster node to node security, SSL certificate for cluster management endpoint and default admin client
        /// </summary>
        [Input("certificate")]
        public Input<Inputs.CertificateDescriptionArgs>? Certificate { get; set; }

        [Input("clientCertificateCommonNames")]
        private InputList<Inputs.ClientCertificateCommonNameArgs>? _clientCertificateCommonNames;

        /// <summary>
        ///  List of client certificates to whitelist based on common names
        /// </summary>
        public InputList<Inputs.ClientCertificateCommonNameArgs> ClientCertificateCommonNames
        {
            get => _clientCertificateCommonNames ?? (_clientCertificateCommonNames = new InputList<Inputs.ClientCertificateCommonNameArgs>());
            set => _clientCertificateCommonNames = value;
        }

        [Input("clientCertificateThumbprints")]
        private InputList<Inputs.ClientCertificateThumbprintArgs>? _clientCertificateThumbprints;

        /// <summary>
        /// The client thumbprint details ,it is used for client access for cluster operation
        /// </summary>
        public InputList<Inputs.ClientCertificateThumbprintArgs> ClientCertificateThumbprints
        {
            get => _clientCertificateThumbprints ?? (_clientCertificateThumbprints = new InputList<Inputs.ClientCertificateThumbprintArgs>());
            set => _clientCertificateThumbprints = value;
        }

        /// <summary>
        /// The ServiceFabric code version running in your cluster
        /// </summary>
        [Input("clusterCodeVersion")]
        public Input<string>? ClusterCodeVersion { get; set; }

        /// <summary>
        /// The name of the cluster resource
        /// </summary>
        [Input("clusterName", required: true)]
        public Input<string> ClusterName { get; set; } = null!;

        /// <summary>
        /// The storage diagnostics account configuration details
        /// </summary>
        [Input("diagnosticsStorageAccountConfig")]
        public Input<Inputs.DiagnosticsStorageAccountConfigArgs>? DiagnosticsStorageAccountConfig { get; set; }

        [Input("fabricSettings")]
        private InputList<Inputs.SettingsSectionDescriptionArgs>? _fabricSettings;

        /// <summary>
        /// List of custom fabric settings to configure the cluster.
        /// </summary>
        public InputList<Inputs.SettingsSectionDescriptionArgs> FabricSettings
        {
            get => _fabricSettings ?? (_fabricSettings = new InputList<Inputs.SettingsSectionDescriptionArgs>());
            set => _fabricSettings = value;
        }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The http management endpoint of the cluster
        /// </summary>
        [Input("managementEndpoint", required: true)]
        public Input<string> ManagementEndpoint { get; set; } = null!;

        [Input("nodeTypes", required: true)]
        private InputList<Inputs.NodeTypeDescriptionArgs>? _nodeTypes;

        /// <summary>
        /// The list of node types that make up the cluster
        /// </summary>
        public InputList<Inputs.NodeTypeDescriptionArgs> NodeTypes
        {
            get => _nodeTypes ?? (_nodeTypes = new InputList<Inputs.NodeTypeDescriptionArgs>());
            set => _nodeTypes = value;
        }

        /// <summary>
        /// Cluster reliability level indicates replica set size of system service
        /// </summary>
        [Input("reliabilityLevel")]
        public Input<string>? ReliabilityLevel { get; set; }

        /// <summary>
        /// The name of the resource group to which the resource belongs or get created
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The server certificate used by reverse proxy
        /// </summary>
        [Input("reverseProxyCertificate")]
        public Input<Inputs.CertificateDescriptionArgs>? ReverseProxyCertificate { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The policy to use when upgrading the cluster.
        /// </summary>
        [Input("upgradeDescription")]
        public Input<Inputs.ClusterUpgradePolicyArgs>? UpgradeDescription { get; set; }

        /// <summary>
        /// Cluster upgrade mode indicates if fabric upgrade is initiated automatically by the system or not
        /// </summary>
        [Input("upgradeMode")]
        public Input<string>? UpgradeMode { get; set; }

        /// <summary>
        /// The name of VM image VMSS has been configured with. Generic names such as Windows or Linux can be used.
        /// </summary>
        [Input("vmImage")]
        public Input<string>? VmImage { get; set; }

        public ClusterArgs()
        {
        }
    }
}
