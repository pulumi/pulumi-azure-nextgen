// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview
{
    public static class GetWorkloadGroup
    {
        public static Task<GetWorkloadGroupResult> InvokeAsync(GetWorkloadGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWorkloadGroupResult>("azure-nextgen:sql/v20200202preview:getWorkloadGroup", args ?? new GetWorkloadGroupArgs(), options.WithVersion());
    }


    public sealed class GetWorkloadGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the database.
        /// </summary>
        [Input("databaseName", required: true)]
        public string DatabaseName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        /// <summary>
        /// The name of the workload group.
        /// </summary>
        [Input("workloadGroupName", required: true)]
        public string WorkloadGroupName { get; set; } = null!;

        public GetWorkloadGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWorkloadGroupResult
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The workload group importance level.
        /// </summary>
        public readonly string? Importance;
        /// <summary>
        /// The workload group cap percentage resource.
        /// </summary>
        public readonly int MaxResourcePercent;
        /// <summary>
        /// The workload group request maximum grant percentage.
        /// </summary>
        public readonly double? MaxResourcePercentPerRequest;
        /// <summary>
        /// The workload group minimum percentage resource.
        /// </summary>
        public readonly int MinResourcePercent;
        /// <summary>
        /// The workload group request minimum grant percentage.
        /// </summary>
        public readonly double MinResourcePercentPerRequest;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The workload group query execution timeout.
        /// </summary>
        public readonly int? QueryExecutionTimeout;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWorkloadGroupResult(
            string id,

            string? importance,

            int maxResourcePercent,

            double? maxResourcePercentPerRequest,

            int minResourcePercent,

            double minResourcePercentPerRequest,

            string name,

            int? queryExecutionTimeout,

            string type)
        {
            Id = id;
            Importance = importance;
            MaxResourcePercent = maxResourcePercent;
            MaxResourcePercentPerRequest = maxResourcePercentPerRequest;
            MinResourcePercent = minResourcePercent;
            MinResourcePercentPerRequest = minResourcePercentPerRequest;
            Name = name;
            QueryExecutionTimeout = queryExecutionTimeout;
            Type = type;
        }
    }
}
