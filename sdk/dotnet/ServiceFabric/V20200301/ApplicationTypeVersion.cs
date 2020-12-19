// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20200301
{
    /// <summary>
    /// An application type version resource for the specified application type name resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:servicefabric/v20200301:ApplicationTypeVersion")]
    public partial class ApplicationTypeVersion : Pulumi.CustomResource
    {
        /// <summary>
        /// The URL to the application package
        /// </summary>
        [Output("appPackageUrl")]
        public Output<string> AppPackageUrl { get; private set; } = null!;

        /// <summary>
        /// List of application type parameters that can be overridden when creating or updating the application.
        /// </summary>
        [Output("defaultParameterList")]
        public Output<ImmutableDictionary<string, string>> DefaultParameterList { get; private set; } = null!;

        /// <summary>
        /// Azure resource etag.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// It will be deprecated in New API, resource location depends on the parent resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Azure resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Azure resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Azure resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ApplicationTypeVersion resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ApplicationTypeVersion(string name, ApplicationTypeVersionArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:servicefabric/v20200301:ApplicationTypeVersion", name, args ?? new ApplicationTypeVersionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ApplicationTypeVersion(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:servicefabric/v20200301:ApplicationTypeVersion", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/latest:ApplicationTypeVersion"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20170701preview:ApplicationTypeVersion"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190301:ApplicationTypeVersion"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190301preview:ApplicationTypeVersion"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190601preview:ApplicationTypeVersion"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20191101preview:ApplicationTypeVersion"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ApplicationTypeVersion resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ApplicationTypeVersion Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ApplicationTypeVersion(name, id, options);
        }
    }

    public sealed class ApplicationTypeVersionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The URL to the application package
        /// </summary>
        [Input("appPackageUrl", required: true)]
        public Input<string> AppPackageUrl { get; set; } = null!;

        /// <summary>
        /// The name of the application type name resource.
        /// </summary>
        [Input("applicationTypeName", required: true)]
        public Input<string> ApplicationTypeName { get; set; } = null!;

        /// <summary>
        /// The name of the cluster resource.
        /// </summary>
        [Input("clusterName", required: true)]
        public Input<string> ClusterName { get; set; } = null!;

        /// <summary>
        /// It will be deprecated in New API, resource location depends on the parent resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Azure resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The application type version.
        /// </summary>
        [Input("version", required: true)]
        public Input<string> Version { get; set; } = null!;

        public ApplicationTypeVersionArgs()
        {
        }
    }
}
