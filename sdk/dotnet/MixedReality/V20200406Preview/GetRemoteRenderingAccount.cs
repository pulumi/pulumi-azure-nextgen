// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MixedReality.V20200406Preview
{
    public static class GetRemoteRenderingAccount
    {
        public static Task<GetRemoteRenderingAccountResult> InvokeAsync(GetRemoteRenderingAccountArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRemoteRenderingAccountResult>("azure-nextgen:mixedreality/v20200406preview:getRemoteRenderingAccount", args ?? new GetRemoteRenderingAccountArgs(), options.WithVersion());
    }


    public sealed class GetRemoteRenderingAccountArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of an Mixed Reality Account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// Name of an Azure resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetRemoteRenderingAccountArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRemoteRenderingAccountResult
    {
        /// <summary>
        /// Correspond domain name of certain Spatial Anchors Account
        /// </summary>
        public readonly string AccountDomain;
        /// <summary>
        /// unique id of certain account.
        /// </summary>
        public readonly string AccountId;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        public readonly Outputs.RemoteRenderingAccountResponseIdentity? Identity;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRemoteRenderingAccountResult(
            string accountDomain,

            string accountId,

            string id,

            Outputs.RemoteRenderingAccountResponseIdentity? identity,

            string location,

            string name,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AccountDomain = accountDomain;
            AccountId = accountId;
            Id = id;
            Identity = identity;
            Location = location;
            Name = name;
            Tags = tags;
            Type = type;
        }
    }
}
