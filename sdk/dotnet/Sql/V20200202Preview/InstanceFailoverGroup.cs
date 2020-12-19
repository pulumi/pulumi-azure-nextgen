// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview
{
    /// <summary>
    /// An instance failover group.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:sql/v20200202preview:InstanceFailoverGroup")]
    public partial class InstanceFailoverGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// List of managed instance pairs in the failover group.
        /// </summary>
        [Output("managedInstancePairs")]
        public Output<ImmutableArray<Outputs.ManagedInstancePairInfoResponse>> ManagedInstancePairs { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Partner region information for the failover group.
        /// </summary>
        [Output("partnerRegions")]
        public Output<ImmutableArray<Outputs.PartnerRegionInfoResponse>> PartnerRegions { get; private set; } = null!;

        /// <summary>
        /// Read-only endpoint of the failover group instance.
        /// </summary>
        [Output("readOnlyEndpoint")]
        public Output<Outputs.InstanceFailoverGroupReadOnlyEndpointResponse?> ReadOnlyEndpoint { get; private set; } = null!;

        /// <summary>
        /// Read-write endpoint of the failover group instance.
        /// </summary>
        [Output("readWriteEndpoint")]
        public Output<Outputs.InstanceFailoverGroupReadWriteEndpointResponse> ReadWriteEndpoint { get; private set; } = null!;

        /// <summary>
        /// Local replication role of the failover group instance.
        /// </summary>
        [Output("replicationRole")]
        public Output<string> ReplicationRole { get; private set; } = null!;

        /// <summary>
        /// Replication state of the failover group instance.
        /// </summary>
        [Output("replicationState")]
        public Output<string> ReplicationState { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a InstanceFailoverGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public InstanceFailoverGroup(string name, InstanceFailoverGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:InstanceFailoverGroup", name, args ?? new InstanceFailoverGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private InstanceFailoverGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:InstanceFailoverGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20171001preview:InstanceFailoverGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200801preview:InstanceFailoverGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing InstanceFailoverGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static InstanceFailoverGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new InstanceFailoverGroup(name, id, options);
        }
    }

    public sealed class InstanceFailoverGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the failover group.
        /// </summary>
        [Input("failoverGroupName", required: true)]
        public Input<string> FailoverGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the region where the resource is located.
        /// </summary>
        [Input("locationName", required: true)]
        public Input<string> LocationName { get; set; } = null!;

        [Input("managedInstancePairs", required: true)]
        private InputList<Inputs.ManagedInstancePairInfoArgs>? _managedInstancePairs;

        /// <summary>
        /// List of managed instance pairs in the failover group.
        /// </summary>
        public InputList<Inputs.ManagedInstancePairInfoArgs> ManagedInstancePairs
        {
            get => _managedInstancePairs ?? (_managedInstancePairs = new InputList<Inputs.ManagedInstancePairInfoArgs>());
            set => _managedInstancePairs = value;
        }

        [Input("partnerRegions", required: true)]
        private InputList<Inputs.PartnerRegionInfoArgs>? _partnerRegions;

        /// <summary>
        /// Partner region information for the failover group.
        /// </summary>
        public InputList<Inputs.PartnerRegionInfoArgs> PartnerRegions
        {
            get => _partnerRegions ?? (_partnerRegions = new InputList<Inputs.PartnerRegionInfoArgs>());
            set => _partnerRegions = value;
        }

        /// <summary>
        /// Read-only endpoint of the failover group instance.
        /// </summary>
        [Input("readOnlyEndpoint")]
        public Input<Inputs.InstanceFailoverGroupReadOnlyEndpointArgs>? ReadOnlyEndpoint { get; set; }

        /// <summary>
        /// Read-write endpoint of the failover group instance.
        /// </summary>
        [Input("readWriteEndpoint", required: true)]
        public Input<Inputs.InstanceFailoverGroupReadWriteEndpointArgs> ReadWriteEndpoint { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public InstanceFailoverGroupArgs()
        {
        }
    }
}
