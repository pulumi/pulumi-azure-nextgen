// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180331Preview
{
    /// <summary>
    /// A project resource
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:datamigration/v20180331preview:Project")]
    public partial class Project : Pulumi.CustomResource
    {
        /// <summary>
        /// UTC Date and time when project was created
        /// </summary>
        [Output("creationTime")]
        public Output<string> CreationTime { get; private set; } = null!;

        /// <summary>
        /// List of DatabaseInfo
        /// </summary>
        [Output("databasesInfo")]
        public Output<ImmutableArray<Outputs.DatabaseInfoResponse>> DatabasesInfo { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The project's provisioning state
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Information for connecting to source
        /// </summary>
        [Output("sourceConnectionInfo")]
        public Output<Outputs.SqlConnectionInfoResponse?> SourceConnectionInfo { get; private set; } = null!;

        /// <summary>
        /// Source platform for the project
        /// </summary>
        [Output("sourcePlatform")]
        public Output<string> SourcePlatform { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Information for connecting to target
        /// </summary>
        [Output("targetConnectionInfo")]
        public Output<Outputs.SqlConnectionInfoResponse?> TargetConnectionInfo { get; private set; } = null!;

        /// <summary>
        /// Target platform for the project
        /// </summary>
        [Output("targetPlatform")]
        public Output<string> TargetPlatform { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Project resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Project(string name, ProjectArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:datamigration/v20180331preview:Project", name, args ?? new ProjectArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Project(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:datamigration/v20180331preview:Project", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/latest:Project"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20171115preview:Project"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20180315preview:Project"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20180419:Project"},
                    new Pulumi.Alias { Type = "azure-nextgen:datamigration/v20180715preview:Project"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Project resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Project Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Project(name, id, options);
        }
    }

    public sealed class ProjectArgs : Pulumi.ResourceArgs
    {
        [Input("databasesInfo")]
        private InputList<Inputs.DatabaseInfoArgs>? _databasesInfo;

        /// <summary>
        /// List of DatabaseInfo
        /// </summary>
        public InputList<Inputs.DatabaseInfoArgs> DatabasesInfo
        {
            get => _databasesInfo ?? (_databasesInfo = new InputList<Inputs.DatabaseInfoArgs>());
            set => _databasesInfo = value;
        }

        /// <summary>
        /// Name of the resource group
        /// </summary>
        [Input("groupName", required: true)]
        public Input<string> GroupName { get; set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Name of the project
        /// </summary>
        [Input("projectName", required: true)]
        public Input<string> ProjectName { get; set; } = null!;

        /// <summary>
        /// Name of the service
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        /// <summary>
        /// Information for connecting to source
        /// </summary>
        [Input("sourceConnectionInfo")]
        public Input<Inputs.SqlConnectionInfoArgs>? SourceConnectionInfo { get; set; }

        /// <summary>
        /// Source platform for the project
        /// </summary>
        [Input("sourcePlatform", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataMigration.V20180331Preview.ProjectSourcePlatform> SourcePlatform { get; set; } = null!;

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
        /// Information for connecting to target
        /// </summary>
        [Input("targetConnectionInfo")]
        public Input<Inputs.SqlConnectionInfoArgs>? TargetConnectionInfo { get; set; }

        /// <summary>
        /// Target platform for the project
        /// </summary>
        [Input("targetPlatform", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataMigration.V20180331Preview.ProjectTargetPlatform> TargetPlatform { get; set; } = null!;

        public ProjectArgs()
        {
        }
    }
}
