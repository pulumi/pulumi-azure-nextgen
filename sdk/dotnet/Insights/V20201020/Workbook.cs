// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.V20201020
{
    /// <summary>
    /// An Application Insights workbook definition.
    /// </summary>
    public partial class Workbook : Pulumi.CustomResource
    {
        /// <summary>
        /// Workbook category, as defined by the user at creation time.
        /// </summary>
        [Output("category")]
        public Output<string> Category { get; private set; } = null!;

        /// <summary>
        /// The user-defined name (display name) of the workbook.
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

        /// <summary>
        /// Identity used for BYOS
        /// </summary>
        [Output("identity")]
        public Output<Outputs.ManagedIdentityResponse?> Identity { get; private set; } = null!;

        /// <summary>
        /// The kind of workbook. Choices are user and shared.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Azure resource name. This is GUID value. The display name should be assigned within properties field.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Configuration of this particular workbook. Configuration data is a string containing valid JSON
        /// </summary>
        [Output("serializedData")]
        public Output<string> SerializedData { get; private set; } = null!;

        /// <summary>
        /// ResourceId for a source resource.
        /// </summary>
        [Output("sourceId")]
        public Output<string?> SourceId { get; private set; } = null!;

        /// <summary>
        /// BYOS Storage Account URI
        /// </summary>
        [Output("storageUri")]
        public Output<string?> StorageUri { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Date and time in UTC of the last modification that was made to this workbook definition.
        /// </summary>
        [Output("timeModified")]
        public Output<string> TimeModified { get; private set; } = null!;

        /// <summary>
        /// Azure resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Unique user id of the specific user that owns this workbook.
        /// </summary>
        [Output("userId")]
        public Output<string> UserId { get; private set; } = null!;

        /// <summary>
        /// Workbook version
        /// </summary>
        [Output("version")]
        public Output<string?> Version { get; private set; } = null!;


        /// <summary>
        /// Create a Workbook resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Workbook(string name, WorkbookArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:insights/v20201020:Workbook", name, args ?? new WorkbookArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Workbook(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:insights/v20201020:Workbook", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:insights/latest:Workbook"},
                    new Pulumi.Alias { Type = "azure-nextgen:insights/v20150501:Workbook"},
                    new Pulumi.Alias { Type = "azure-nextgen:insights/v20180617preview:Workbook"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Workbook resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Workbook Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Workbook(name, id, options);
        }
    }

    public sealed class WorkbookArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Workbook category, as defined by the user at creation time.
        /// </summary>
        [Input("category", required: true)]
        public Input<string> Category { get; set; } = null!;

        /// <summary>
        /// The user-defined name (display name) of the workbook.
        /// </summary>
        [Input("displayName", required: true)]
        public Input<string> DisplayName { get; set; } = null!;

        /// <summary>
        /// Identity used for BYOS
        /// </summary>
        [Input("identity")]
        public Input<Inputs.ManagedIdentityArgs>? Identity { get; set; }

        /// <summary>
        /// The kind of workbook. Choices are user and shared.
        /// </summary>
        [Input("kind")]
        public InputUnion<string, Pulumi.AzureNextGen.Insights.V20201020.SharedTypeKind>? Kind { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Application Insights component resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        /// <summary>
        /// Configuration of this particular workbook. Configuration data is a string containing valid JSON
        /// </summary>
        [Input("serializedData", required: true)]
        public Input<string> SerializedData { get; set; } = null!;

        /// <summary>
        /// ResourceId for a source resource.
        /// </summary>
        [Input("sourceId", required: true)]
        public Input<string> SourceId { get; set; } = null!;

        /// <summary>
        /// BYOS Storage Account URI
        /// </summary>
        [Input("storageUri")]
        public Input<string>? StorageUri { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Workbook version
        /// </summary>
        [Input("version")]
        public Input<string>? Version { get; set; }

        public WorkbookArgs()
        {
        }
    }
}
