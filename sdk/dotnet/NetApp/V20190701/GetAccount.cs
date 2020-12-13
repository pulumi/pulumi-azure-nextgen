// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NetApp.V20190701
{
    public static class GetAccount
    {
        public static Task<GetAccountResult> InvokeAsync(GetAccountArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAccountResult>("azure-nextgen:netapp/v20190701:getAccount", args ?? new GetAccountArgs(), options.WithVersion());
    }


    public sealed class GetAccountArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the NetApp account
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAccountArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAccountResult
    {
        /// <summary>
        /// Active Directories
        /// </summary>
        public readonly ImmutableArray<Outputs.ActiveDirectoryResponse> ActiveDirectories;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Azure lifecycle management
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly object? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAccountResult(
            ImmutableArray<Outputs.ActiveDirectoryResponse> activeDirectories,

            string id,

            string location,

            string name,

            string provisioningState,

            object? tags,

            string type)
        {
            ActiveDirectories = activeDirectories;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
        }
    }
}
