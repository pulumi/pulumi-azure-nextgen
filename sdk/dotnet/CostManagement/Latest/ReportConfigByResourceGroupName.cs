// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CostManagement.Latest
{
    /// <summary>
    /// A report config resource.
    /// Latest API Version: 2018-05-31.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:costmanagement/latest:ReportConfigByResourceGroupName")]
    public partial class ReportConfigByResourceGroupName : Pulumi.CustomResource
    {
        /// <summary>
        /// Has definition for the report config.
        /// </summary>
        [Output("definition")]
        public Output<Outputs.ReportConfigDefinitionResponse> Definition { get; private set; } = null!;

        /// <summary>
        /// Has delivery information for the report config.
        /// </summary>
        [Output("deliveryInfo")]
        public Output<Outputs.ReportConfigDeliveryInfoResponse> DeliveryInfo { get; private set; } = null!;

        /// <summary>
        /// The format of the report being delivered.
        /// </summary>
        [Output("format")]
        public Output<string?> Format { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Has schedule information for the report config.
        /// </summary>
        [Output("schedule")]
        public Output<Outputs.ReportConfigScheduleResponse?> Schedule { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ReportConfigByResourceGroupName resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ReportConfigByResourceGroupName(string name, ReportConfigByResourceGroupNameArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:costmanagement/latest:ReportConfigByResourceGroupName", name, args ?? new ReportConfigByResourceGroupNameArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ReportConfigByResourceGroupName(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:costmanagement/latest:ReportConfigByResourceGroupName", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:costmanagement/v20180531:ReportConfigByResourceGroupName"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ReportConfigByResourceGroupName resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ReportConfigByResourceGroupName Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ReportConfigByResourceGroupName(name, id, options);
        }
    }

    public sealed class ReportConfigByResourceGroupNameArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Has definition for the report config.
        /// </summary>
        [Input("definition", required: true)]
        public Input<Inputs.ReportConfigDefinitionArgs> Definition { get; set; } = null!;

        /// <summary>
        /// Has delivery information for the report config.
        /// </summary>
        [Input("deliveryInfo", required: true)]
        public Input<Inputs.ReportConfigDeliveryInfoArgs> DeliveryInfo { get; set; } = null!;

        /// <summary>
        /// The format of the report being delivered.
        /// </summary>
        [Input("format")]
        public InputUnion<string, Pulumi.AzureNextGen.CostManagement.Latest.FormatType>? Format { get; set; }

        /// <summary>
        /// Report Config Name.
        /// </summary>
        [Input("reportConfigName", required: true)]
        public Input<string> ReportConfigName { get; set; } = null!;

        /// <summary>
        /// Azure Resource Group Name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Has schedule information for the report config.
        /// </summary>
        [Input("schedule")]
        public Input<Inputs.ReportConfigScheduleArgs>? Schedule { get; set; }

        public ReportConfigByResourceGroupNameArgs()
        {
        }
    }
}
