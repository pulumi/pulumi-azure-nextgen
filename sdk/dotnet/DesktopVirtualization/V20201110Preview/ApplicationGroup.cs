// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DesktopVirtualization.V20201110Preview
{
    /// <summary>
    /// Represents a ApplicationGroup definition.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:desktopvirtualization/v20201110preview:ApplicationGroup")]
    public partial class ApplicationGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// Resource Type of ApplicationGroup.
        /// </summary>
        [Output("applicationGroupType")]
        public Output<string> ApplicationGroupType { get; private set; } = null!;

        /// <summary>
        /// Description of ApplicationGroup.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Friendly name of ApplicationGroup.
        /// </summary>
        [Output("friendlyName")]
        public Output<string?> FriendlyName { get; private set; } = null!;

        /// <summary>
        /// HostPool arm path of ApplicationGroup.
        /// </summary>
        [Output("hostPoolArmPath")]
        public Output<string> HostPoolArmPath { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Workspace arm path of ApplicationGroup.
        /// </summary>
        [Output("workspaceArmPath")]
        public Output<string> WorkspaceArmPath { get; private set; } = null!;


        /// <summary>
        /// Create a ApplicationGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ApplicationGroup(string name, ApplicationGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:desktopvirtualization/v20201110preview:ApplicationGroup", name, args ?? new ApplicationGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ApplicationGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:desktopvirtualization/v20201110preview:ApplicationGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20190123preview:ApplicationGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20190924preview:ApplicationGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20191210preview:ApplicationGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20200921preview:ApplicationGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201019preview:ApplicationGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201102preview:ApplicationGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20210114preview:ApplicationGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ApplicationGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ApplicationGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ApplicationGroup(name, id, options);
        }
    }

    public sealed class ApplicationGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the application group
        /// </summary>
        [Input("applicationGroupName", required: true)]
        public Input<string> ApplicationGroupName { get; set; } = null!;

        /// <summary>
        /// Resource Type of ApplicationGroup.
        /// </summary>
        [Input("applicationGroupType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20201110Preview.ApplicationGroupType> ApplicationGroupType { get; set; } = null!;

        /// <summary>
        /// Description of ApplicationGroup.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Friendly name of ApplicationGroup.
        /// </summary>
        [Input("friendlyName")]
        public Input<string>? FriendlyName { get; set; }

        /// <summary>
        /// HostPool arm path of ApplicationGroup.
        /// </summary>
        [Input("hostPoolArmPath", required: true)]
        public Input<string> HostPoolArmPath { get; set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

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

        public ApplicationGroupArgs()
        {
        }
    }
}
