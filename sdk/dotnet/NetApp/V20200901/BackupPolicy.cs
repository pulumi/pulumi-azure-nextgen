// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NetApp.V20200901
{
    /// <summary>
    /// Backup policy information
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:netapp/v20200901:BackupPolicy")]
    public partial class BackupPolicy : Pulumi.CustomResource
    {
        /// <summary>
        /// Daily backups count to keep
        /// </summary>
        [Output("dailyBackupsToKeep")]
        public Output<int?> DailyBackupsToKeep { get; private set; } = null!;

        /// <summary>
        /// The property to decide policy is enabled or not
        /// </summary>
        [Output("enabled")]
        public Output<bool?> Enabled { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Monthly backups count to keep
        /// </summary>
        [Output("monthlyBackupsToKeep")]
        public Output<int?> MonthlyBackupsToKeep { get; private set; } = null!;

        /// <summary>
        /// Name of backup policy
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Azure lifecycle management
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// A list of volumes assigned to this policy
        /// </summary>
        [Output("volumeBackups")]
        public Output<ImmutableArray<Outputs.VolumeBackupsResponse>> VolumeBackups { get; private set; } = null!;

        /// <summary>
        /// Volumes using current backup policy
        /// </summary>
        [Output("volumesAssigned")]
        public Output<int?> VolumesAssigned { get; private set; } = null!;

        /// <summary>
        /// Weekly backups count to keep
        /// </summary>
        [Output("weeklyBackupsToKeep")]
        public Output<int?> WeeklyBackupsToKeep { get; private set; } = null!;

        /// <summary>
        /// Yearly backups count to keep
        /// </summary>
        [Output("yearlyBackupsToKeep")]
        public Output<int?> YearlyBackupsToKeep { get; private set; } = null!;


        /// <summary>
        /// Create a BackupPolicy resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public BackupPolicy(string name, BackupPolicyArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:netapp/v20200901:BackupPolicy", name, args ?? new BackupPolicyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private BackupPolicy(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:netapp/v20200901:BackupPolicy", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:netapp/latest:BackupPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:netapp/v20200501:BackupPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:netapp/v20200601:BackupPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:netapp/v20200701:BackupPolicy"},
                    new Pulumi.Alias { Type = "azure-nextgen:netapp/v20200801:BackupPolicy"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing BackupPolicy resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static BackupPolicy Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new BackupPolicy(name, id, options);
        }
    }

    public sealed class BackupPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the NetApp account
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// Backup policy Name which uniquely identify backup policy.
        /// </summary>
        [Input("backupPolicyName", required: true)]
        public Input<string> BackupPolicyName { get; set; } = null!;

        /// <summary>
        /// Daily backups count to keep
        /// </summary>
        [Input("dailyBackupsToKeep")]
        public Input<int>? DailyBackupsToKeep { get; set; }

        /// <summary>
        /// The property to decide policy is enabled or not
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Monthly backups count to keep
        /// </summary>
        [Input("monthlyBackupsToKeep")]
        public Input<int>? MonthlyBackupsToKeep { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

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

        [Input("volumeBackups")]
        private InputList<Inputs.VolumeBackupsArgs>? _volumeBackups;

        /// <summary>
        /// A list of volumes assigned to this policy
        /// </summary>
        public InputList<Inputs.VolumeBackupsArgs> VolumeBackups
        {
            get => _volumeBackups ?? (_volumeBackups = new InputList<Inputs.VolumeBackupsArgs>());
            set => _volumeBackups = value;
        }

        /// <summary>
        /// Volumes using current backup policy
        /// </summary>
        [Input("volumesAssigned")]
        public Input<int>? VolumesAssigned { get; set; }

        /// <summary>
        /// Weekly backups count to keep
        /// </summary>
        [Input("weeklyBackupsToKeep")]
        public Input<int>? WeeklyBackupsToKeep { get; set; }

        /// <summary>
        /// Yearly backups count to keep
        /// </summary>
        [Input("yearlyBackupsToKeep")]
        public Input<int>? YearlyBackupsToKeep { get; set; }

        public BackupPolicyArgs()
        {
        }
    }
}
