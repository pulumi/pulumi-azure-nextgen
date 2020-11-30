// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Kubernetes.V20200101Preview
{
    /// <summary>
    /// Represents a connected cluster.
    /// </summary>
    public partial class ConnectedCluster : Pulumi.CustomResource
    {
        /// <summary>
        /// AAD profile of the connected cluster.
        /// </summary>
        [Output("aadProfile")]
        public Output<Outputs.ConnectedClusterAADProfileResponse> AadProfile { get; private set; } = null!;

        /// <summary>
        /// Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
        /// </summary>
        [Output("agentPublicKeyCertificate")]
        public Output<string> AgentPublicKeyCertificate { get; private set; } = null!;

        /// <summary>
        /// Version of the agent running on the connected cluster resource
        /// </summary>
        [Output("agentVersion")]
        public Output<string> AgentVersion { get; private set; } = null!;

        /// <summary>
        /// Represents the connectivity status of the connected cluster.
        /// </summary>
        [Output("connectivityStatus")]
        public Output<string?> ConnectivityStatus { get; private set; } = null!;

        /// <summary>
        /// The Kubernetes distribution running on this connected cluster.
        /// </summary>
        [Output("distribution")]
        public Output<string?> Distribution { get; private set; } = null!;

        /// <summary>
        /// The identity of the connected cluster.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.ConnectedClusterIdentityResponse> Identity { get; private set; } = null!;

        /// <summary>
        /// The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
        /// </summary>
        [Output("infrastructure")]
        public Output<string?> Infrastructure { get; private set; } = null!;

        /// <summary>
        /// The Kubernetes version of the connected cluster resource
        /// </summary>
        [Output("kubernetesVersion")]
        public Output<string> KubernetesVersion { get; private set; } = null!;

        /// <summary>
        /// Time representing the last instance when heart beat was received from the cluster
        /// </summary>
        [Output("lastConnectivityTime")]
        public Output<string> LastConnectivityTime { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Expiration time of the managed identity certificate
        /// </summary>
        [Output("managedIdentityCertificateExpirationTime")]
        public Output<string> ManagedIdentityCertificateExpirationTime { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Connected cluster offering
        /// </summary>
        [Output("offering")]
        public Output<string> Offering { get; private set; } = null!;

        /// <summary>
        /// Provisioning state of the connected cluster resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Number of CPU cores present in the connected cluster resource
        /// </summary>
        [Output("totalCoreCount")]
        public Output<int> TotalCoreCount { get; private set; } = null!;

        /// <summary>
        /// Number of nodes present in the connected cluster resource
        /// </summary>
        [Output("totalNodeCount")]
        public Output<int> TotalNodeCount { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ConnectedCluster resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ConnectedCluster(string name, ConnectedClusterArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:kubernetes/v20200101preview:ConnectedCluster", name, args ?? new ConnectedClusterArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ConnectedCluster(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:kubernetes/v20200101preview:ConnectedCluster", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ConnectedCluster resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ConnectedCluster Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ConnectedCluster(name, id, options);
        }
    }

    public sealed class ConnectedClusterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// AAD profile of the connected cluster.
        /// </summary>
        [Input("aadProfile", required: true)]
        public Input<Inputs.ConnectedClusterAADProfileArgs> AadProfile { get; set; } = null!;

        /// <summary>
        /// Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
        /// </summary>
        [Input("agentPublicKeyCertificate", required: true)]
        public Input<string> AgentPublicKeyCertificate { get; set; } = null!;

        /// <summary>
        /// The name of the Kubernetes cluster on which get is called.
        /// </summary>
        [Input("clusterName", required: true)]
        public Input<string> ClusterName { get; set; } = null!;

        /// <summary>
        /// Represents the connectivity status of the connected cluster.
        /// </summary>
        [Input("connectivityStatus")]
        public Input<string>? ConnectivityStatus { get; set; }

        /// <summary>
        /// The Kubernetes distribution running on this connected cluster.
        /// </summary>
        [Input("distribution")]
        public Input<string>? Distribution { get; set; }

        /// <summary>
        /// The identity of the connected cluster.
        /// </summary>
        [Input("identity", required: true)]
        public Input<Inputs.ConnectedClusterIdentityArgs> Identity { get; set; } = null!;

        /// <summary>
        /// The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
        /// </summary>
        [Input("infrastructure")]
        public Input<string>? Infrastructure { get; set; }

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Provisioning state of the connected cluster resource.
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

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

        public ConnectedClusterArgs()
        {
        }
    }
}
