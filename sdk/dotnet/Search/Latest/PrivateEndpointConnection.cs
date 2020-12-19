// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Search.Latest
{
    /// <summary>
    /// Describes an existing Private Endpoint connection to the Azure Cognitive Search service.
    /// Latest API Version: 2020-08-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:search/latest:PrivateEndpointConnection")]
    public partial class PrivateEndpointConnection : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service.
        /// </summary>
        [Output("properties")]
        public Output<Outputs.PrivateEndpointConnectionPropertiesResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a PrivateEndpointConnection resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PrivateEndpointConnection(string name, PrivateEndpointConnectionArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:search/latest:PrivateEndpointConnection", name, args ?? new PrivateEndpointConnectionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PrivateEndpointConnection(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:search/latest:PrivateEndpointConnection", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:search/v20191001preview:PrivateEndpointConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:search/v20200313:PrivateEndpointConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:search/v20200801:PrivateEndpointConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:search/v20200801preview:PrivateEndpointConnection"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PrivateEndpointConnection resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PrivateEndpointConnection Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PrivateEndpointConnection(name, id, options);
        }
    }

    public sealed class PrivateEndpointConnectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the private endpoint connection to the Azure Cognitive Search service with the specified resource group.
        /// </summary>
        [Input("privateEndpointConnectionName", required: true)]
        public Input<string> PrivateEndpointConnectionName { get; set; } = null!;

        /// <summary>
        /// Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service.
        /// </summary>
        [Input("properties")]
        public Input<Inputs.PrivateEndpointConnectionPropertiesArgs>? Properties { get; set; }

        /// <summary>
        /// The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Azure Cognitive Search service associated with the specified resource group.
        /// </summary>
        [Input("searchServiceName", required: true)]
        public Input<string> SearchServiceName { get; set; } = null!;

        public PrivateEndpointConnectionArgs()
        {
        }
    }
}
