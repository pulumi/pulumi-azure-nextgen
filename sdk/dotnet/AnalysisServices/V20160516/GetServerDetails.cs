// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AnalysisServices.V20160516
{
    public static class GetServerDetails
    {
        public static Task<GetServerDetailsResult> InvokeAsync(GetServerDetailsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServerDetailsResult>("azure-nextgen:analysisservices/v20160516:getServerDetails", args ?? new GetServerDetailsArgs(), options.WithVersion());
    }


    public sealed class GetServerDetailsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetServerDetailsArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServerDetailsResult
    {
        /// <summary>
        /// A collection of AS server administrators
        /// </summary>
        public readonly Outputs.ServerAdministratorsResponse? AsAdministrators;
        /// <summary>
        /// The container URI of backup blob.
        /// </summary>
        public readonly string? BackupBlobContainerUri;
        /// <summary>
        /// An identifier that represents the Analysis Services resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Location of the Analysis Services resource.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the Analysis Services resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The full name of the Analysis Services resource.
        /// </summary>
        public readonly string ServerFullName;
        /// <summary>
        /// The SKU of the Analysis Services resource.
        /// </summary>
        public readonly Outputs.ResourceSkuResponse Sku;
        /// <summary>
        /// The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Key-value pairs of additional resource provisioning properties.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the Analysis Services resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetServerDetailsResult(
            Outputs.ServerAdministratorsResponse? asAdministrators,

            string? backupBlobContainerUri,

            string id,

            string location,

            string name,

            string provisioningState,

            string serverFullName,

            Outputs.ResourceSkuResponse sku,

            string state,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AsAdministrators = asAdministrators;
            BackupBlobContainerUri = backupBlobContainerUri;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            ServerFullName = serverFullName;
            Sku = sku;
            State = state;
            Tags = tags;
            Type = type;
        }
    }
}
