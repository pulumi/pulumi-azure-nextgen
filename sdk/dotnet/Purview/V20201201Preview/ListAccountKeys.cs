// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Purview.V20201201Preview
{
    public static class ListAccountKeys
    {
        public static Task<ListAccountKeysResult> InvokeAsync(ListAccountKeysArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListAccountKeysResult>("azure-nextgen:purview/v20201201preview:listAccountKeys", args ?? new ListAccountKeysArgs(), options.WithVersion());
    }


    public sealed class ListAccountKeysArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public ListAccountKeysArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListAccountKeysResult
    {
        /// <summary>
        /// Gets or sets the primary connection string.
        /// </summary>
        public readonly string? AtlasKafkaPrimaryEndpoint;
        /// <summary>
        /// Gets or sets the secondary connection string.
        /// </summary>
        public readonly string? AtlasKafkaSecondaryEndpoint;

        [OutputConstructor]
        private ListAccountKeysResult(
            string? atlasKafkaPrimaryEndpoint,

            string? atlasKafkaSecondaryEndpoint)
        {
            AtlasKafkaPrimaryEndpoint = atlasKafkaPrimaryEndpoint;
            AtlasKafkaSecondaryEndpoint = atlasKafkaSecondaryEndpoint;
        }
    }
}
