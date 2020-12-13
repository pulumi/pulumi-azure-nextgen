// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AzureData.V20200908Preview
{
    public static class GetSqlManagedInstance
    {
        public static Task<GetSqlManagedInstanceResult> InvokeAsync(GetSqlManagedInstanceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSqlManagedInstanceResult>("azure-nextgen:azuredata/v20200908preview:getSqlManagedInstance", args ?? new GetSqlManagedInstanceArgs(), options.WithVersion());
    }


    public sealed class GetSqlManagedInstanceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Azure resource group
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of SQL Managed Instance
        /// </summary>
        [Input("sqlManagedInstanceName", required: true)]
        public string SqlManagedInstanceName { get; set; } = null!;

        public GetSqlManagedInstanceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSqlManagedInstanceResult
    {
        /// <summary>
        /// The instance admin user
        /// </summary>
        public readonly string? Admin;
        /// <summary>
        /// null
        /// </summary>
        public readonly string? DataControllerId;
        /// <summary>
        /// The instance end time
        /// </summary>
        public readonly string? EndTime;
        /// <summary>
        /// Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The on premise instance endpoint
        /// </summary>
        public readonly string? InstanceEndpoint;
        /// <summary>
        /// The raw kubernetes information
        /// </summary>
        public readonly object? K8sRaw;
        /// <summary>
        /// Last uploaded date from on premise cluster. Defaults to current date time
        /// </summary>
        public readonly string? LastUploadedDate;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The instance start time
        /// </summary>
        public readonly string? StartTime;
        /// <summary>
        /// Read only system data
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The instance vCore
        /// </summary>
        public readonly string? VCore;

        [OutputConstructor]
        private GetSqlManagedInstanceResult(
            string? admin,

            string? dataControllerId,

            string? endTime,

            string id,

            string? instanceEndpoint,

            object? k8sRaw,

            string? lastUploadedDate,

            string location,

            string name,

            string? startTime,

            Outputs.SystemDataResponse systemData,

            ImmutableDictionary<string, string>? tags,

            string type,

            string? vCore)
        {
            Admin = admin;
            DataControllerId = dataControllerId;
            EndTime = endTime;
            Id = id;
            InstanceEndpoint = instanceEndpoint;
            K8sRaw = k8sRaw;
            LastUploadedDate = lastUploadedDate;
            Location = location;
            Name = name;
            StartTime = startTime;
            SystemData = systemData;
            Tags = tags;
            Type = type;
            VCore = vCore;
        }
    }
}
