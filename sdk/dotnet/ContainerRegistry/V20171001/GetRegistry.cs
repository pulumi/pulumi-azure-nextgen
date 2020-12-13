// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20171001
{
    public static class GetRegistry
    {
        public static Task<GetRegistryResult> InvokeAsync(GetRegistryArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRegistryResult>("azure-nextgen:containerregistry/v20171001:getRegistry", args ?? new GetRegistryArgs(), options.WithVersion());
    }


    public sealed class GetRegistryArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the container registry.
        /// </summary>
        [Input("registryName", required: true)]
        public string RegistryName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group to which the container registry belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetRegistryArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRegistryResult
    {
        /// <summary>
        /// The value that indicates whether the admin user is enabled.
        /// </summary>
        public readonly bool? AdminUserEnabled;
        /// <summary>
        /// The creation date of the container registry in ISO8601 format.
        /// </summary>
        public readonly string CreationDate;
        /// <summary>
        /// The resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the resource. This cannot be changed after the resource is created.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The URL that can be used to log into the container registry.
        /// </summary>
        public readonly string LoginServer;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The network rule set for a container registry.
        /// </summary>
        public readonly Outputs.NetworkRuleSetResponse? NetworkRuleSet;
        /// <summary>
        /// The provisioning state of the container registry at the time the operation was called.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The SKU of the container registry.
        /// </summary>
        public readonly Outputs.SkuResponse Sku;
        /// <summary>
        /// The status of the container registry at the time the operation was called.
        /// </summary>
        public readonly Outputs.StatusResponse Status;
        /// <summary>
        /// The properties of the storage account for the container registry. Only applicable to Classic SKU.
        /// </summary>
        public readonly Outputs.StorageAccountPropertiesResponse? StorageAccount;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRegistryResult(
            bool? adminUserEnabled,

            string creationDate,

            string id,

            string location,

            string loginServer,

            string name,

            Outputs.NetworkRuleSetResponse? networkRuleSet,

            string provisioningState,

            Outputs.SkuResponse sku,

            Outputs.StatusResponse status,

            Outputs.StorageAccountPropertiesResponse? storageAccount,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AdminUserEnabled = adminUserEnabled;
            CreationDate = creationDate;
            Id = id;
            Location = location;
            LoginServer = loginServer;
            Name = name;
            NetworkRuleSet = networkRuleSet;
            ProvisioningState = provisioningState;
            Sku = sku;
            Status = status;
            StorageAccount = storageAccount;
            Tags = tags;
            Type = type;
        }
    }
}
