// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview
{
    public static class GetJob
    {
        public static Task<GetJobResult> InvokeAsync(GetJobArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetJobResult>("azure-nextgen:sql/v20200801preview:getJob", args ?? new GetJobArgs(), options.WithVersion());
    }


    public sealed class GetJobArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the job agent.
        /// </summary>
        [Input("jobAgentName", required: true)]
        public string JobAgentName { get; set; } = null!;

        /// <summary>
        /// The name of the job to get.
        /// </summary>
        [Input("jobName", required: true)]
        public string JobName { get; set; } = null!;

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

        public GetJobArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetJobResult
    {
        /// <summary>
        /// User-defined description of the job.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Schedule properties of the job.
        /// </summary>
        public readonly Outputs.JobScheduleResponse? Schedule;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The job version number.
        /// </summary>
        public readonly int Version;

        [OutputConstructor]
        private GetJobResult(
            string? description,

            string name,

            Outputs.JobScheduleResponse? schedule,

            string type,

            int version)
        {
            Description = description;
            Name = name;
            Schedule = schedule;
            Type = type;
            Version = version;
        }
    }
}
