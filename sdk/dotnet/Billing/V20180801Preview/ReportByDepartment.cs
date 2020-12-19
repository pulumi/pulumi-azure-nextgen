// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Billing.V20180801Preview
{
    /// <summary>
    /// A report resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:billing/v20180801preview:ReportByDepartment")]
    public partial class ReportByDepartment : Pulumi.CustomResource
    {
        /// <summary>
        /// Has definition for the report.
        /// </summary>
        [Output("definition")]
        public Output<Outputs.ReportDefinitionResponse> Definition { get; private set; } = null!;

        /// <summary>
        /// Has delivery information for the report.
        /// </summary>
        [Output("deliveryInfo")]
        public Output<Outputs.ReportDeliveryInfoResponse> DeliveryInfo { get; private set; } = null!;

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
        /// Has schedule information for the report.
        /// </summary>
        [Output("schedule")]
        public Output<Outputs.ReportScheduleResponse?> Schedule { get; private set; } = null!;

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
        /// Create a ReportByDepartment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ReportByDepartment(string name, ReportByDepartmentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:billing/v20180801preview:ReportByDepartment", name, args ?? new ReportByDepartmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ReportByDepartment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:billing/v20180801preview:ReportByDepartment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ReportByDepartment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ReportByDepartment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ReportByDepartment(name, id, options);
        }
    }

    public sealed class ReportByDepartmentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Has definition for the report.
        /// </summary>
        [Input("definition", required: true)]
        public Input<Inputs.ReportDefinitionArgs> Definition { get; set; } = null!;

        /// <summary>
        /// Has delivery information for the report.
        /// </summary>
        [Input("deliveryInfo", required: true)]
        public Input<Inputs.ReportDeliveryInfoArgs> DeliveryInfo { get; set; } = null!;

        /// <summary>
        /// Department ID
        /// </summary>
        [Input("departmentId", required: true)]
        public Input<string> DepartmentId { get; set; } = null!;

        /// <summary>
        /// The format of the report being delivered.
        /// </summary>
        [Input("format")]
        public InputUnion<string, Pulumi.AzureNextGen.Billing.V20180801Preview.FormatType>? Format { get; set; }

        /// <summary>
        /// Report Name.
        /// </summary>
        [Input("reportName", required: true)]
        public Input<string> ReportName { get; set; } = null!;

        /// <summary>
        /// Has schedule information for the report.
        /// </summary>
        [Input("schedule")]
        public Input<Inputs.ReportScheduleArgs>? Schedule { get; set; }

        public ReportByDepartmentArgs()
        {
        }
    }
}
