// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20201201
{
    /// <summary>
    /// maintenance configuration.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:containerservice/v20201201:MaintenanceConfiguration")]
    public partial class MaintenanceConfiguration : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Time slots on which upgrade is not allowed.
        /// </summary>
        [Output("notAllowedTime")]
        public Output<ImmutableArray<Outputs.TimeSpanResponse>> NotAllowedTime { get; private set; } = null!;

        /// <summary>
        /// The system meta data relating to this resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// Weekday time slots allowed to upgrade.
        /// </summary>
        [Output("timeInWeek")]
        public Output<ImmutableArray<Outputs.TimeInWeekResponse>> TimeInWeek { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a MaintenanceConfiguration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public MaintenanceConfiguration(string name, MaintenanceConfigurationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerservice/v20201201:MaintenanceConfiguration", name, args ?? new MaintenanceConfigurationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private MaintenanceConfiguration(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerservice/v20201201:MaintenanceConfiguration", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/latest:MaintenanceConfiguration"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing MaintenanceConfiguration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static MaintenanceConfiguration Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new MaintenanceConfiguration(name, id, options);
        }
    }

    public sealed class MaintenanceConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the maintenance configuration.
        /// </summary>
        [Input("configName", required: true)]
        public Input<string> ConfigName { get; set; } = null!;

        [Input("notAllowedTime")]
        private InputList<Inputs.TimeSpanArgs>? _notAllowedTime;

        /// <summary>
        /// Time slots on which upgrade is not allowed.
        /// </summary>
        public InputList<Inputs.TimeSpanArgs> NotAllowedTime
        {
            get => _notAllowedTime ?? (_notAllowedTime = new InputList<Inputs.TimeSpanArgs>());
            set => _notAllowedTime = value;
        }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the managed cluster resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        [Input("timeInWeek")]
        private InputList<Inputs.TimeInWeekArgs>? _timeInWeek;

        /// <summary>
        /// Weekday time slots allowed to upgrade.
        /// </summary>
        public InputList<Inputs.TimeInWeekArgs> TimeInWeek
        {
            get => _timeInWeek ?? (_timeInWeek = new InputList<Inputs.TimeInWeekArgs>());
            set => _timeInWeek = value;
        }

        public MaintenanceConfigurationArgs()
        {
        }
    }
}
