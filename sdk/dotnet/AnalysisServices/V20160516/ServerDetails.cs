// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AnalysisServices.V20160516
{
    /// <summary>
    /// Represents an instance of an Analysis Services resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:analysisservices/v20160516:ServerDetails")]
    public partial class ServerDetails : Pulumi.CustomResource
    {
        /// <summary>
        /// A collection of AS server administrators
        /// </summary>
        [Output("asAdministrators")]
        public Output<Outputs.ServerAdministratorsResponse?> AsAdministrators { get; private set; } = null!;

        /// <summary>
        /// The container URI of backup blob.
        /// </summary>
        [Output("backupBlobContainerUri")]
        public Output<string?> BackupBlobContainerUri { get; private set; } = null!;

        /// <summary>
        /// Location of the Analysis Services resource.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The managed mode of the server (0 = not managed, 1 = managed).
        /// </summary>
        [Output("managedMode")]
        public Output<int?> ManagedMode { get; private set; } = null!;

        /// <summary>
        /// The name of the Analysis Services resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The full name of the Analysis Services resource.
        /// </summary>
        [Output("serverFullName")]
        public Output<string> ServerFullName { get; private set; } = null!;

        /// <summary>
        /// The server monitor mode for AS server
        /// </summary>
        [Output("serverMonitorMode")]
        public Output<int?> ServerMonitorMode { get; private set; } = null!;

        /// <summary>
        /// The SKU of the Analysis Services resource.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.ResourceSkuResponse> Sku { get; private set; } = null!;

        /// <summary>
        /// The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
        /// </summary>
        [Output("state")]
        public Output<string> State { get; private set; } = null!;

        /// <summary>
        /// Key-value pairs of additional resource provisioning properties.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the Analysis Services resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ServerDetails resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ServerDetails(string name, ServerDetailsArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:analysisservices/v20160516:ServerDetails", name, args ?? new ServerDetailsArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ServerDetails(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:analysisservices/v20160516:ServerDetails", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:analysisservices/latest:ServerDetails"},
                    new Pulumi.Alias { Type = "azure-nextgen:analysisservices/v20170714:ServerDetails"},
                    new Pulumi.Alias { Type = "azure-nextgen:analysisservices/v20170801:ServerDetails"},
                    new Pulumi.Alias { Type = "azure-nextgen:analysisservices/v20170801beta:ServerDetails"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ServerDetails resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ServerDetails Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ServerDetails(name, id, options);
        }
    }

    public sealed class ServerDetailsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A collection of AS server administrators
        /// </summary>
        [Input("asAdministrators")]
        public Input<Inputs.ServerAdministratorsArgs>? AsAdministrators { get; set; }

        /// <summary>
        /// The container URI of backup blob.
        /// </summary>
        [Input("backupBlobContainerUri")]
        public Input<string>? BackupBlobContainerUri { get; set; }

        /// <summary>
        /// Location of the Analysis Services resource.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The managed mode of the server (0 = not managed, 1 = managed).
        /// </summary>
        [Input("managedMode")]
        public Input<Pulumi.AzureNextGen.AnalysisServices.V20160516.ManagedMode>? ManagedMode { get; set; }

        /// <summary>
        /// The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The server monitor mode for AS server
        /// </summary>
        [Input("serverMonitorMode")]
        public Input<Pulumi.AzureNextGen.AnalysisServices.V20160516.ServerMonitorMode>? ServerMonitorMode { get; set; }

        /// <summary>
        /// The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        /// <summary>
        /// The SKU of the Analysis Services resource.
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.ResourceSkuArgs> Sku { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Key-value pairs of additional resource provisioning properties.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ServerDetailsArgs()
        {
        }
    }
}
