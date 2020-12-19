// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180601
{
    /// <summary>
    /// An application security group in a resource group.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20180601:ApplicationSecurityGroup")]
    public partial class ApplicationSecurityGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
        /// </summary>
        [Output("resourceGuid")]
        public Output<string> ResourceGuid { get; private set; } = null!;

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
        /// Create a ApplicationSecurityGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ApplicationSecurityGroup(string name, ApplicationSecurityGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20180601:ApplicationSecurityGroup", name, args ?? new ApplicationSecurityGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ApplicationSecurityGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20180601:ApplicationSecurityGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171001:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171101:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180101:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180201:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180401:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180701:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190901:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:ApplicationSecurityGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:ApplicationSecurityGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ApplicationSecurityGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ApplicationSecurityGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ApplicationSecurityGroup(name, id, options);
        }
    }

    public sealed class ApplicationSecurityGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the application security group.
        /// </summary>
        [Input("applicationSecurityGroupName", required: true)]
        public Input<string> ApplicationSecurityGroupName { get; set; } = null!;

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Resource location.
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
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ApplicationSecurityGroupArgs()
        {
        }
    }
}
