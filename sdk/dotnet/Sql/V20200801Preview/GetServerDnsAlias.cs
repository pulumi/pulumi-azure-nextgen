// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview
{
    public static class GetServerDnsAlias
    {
        public static Task<GetServerDnsAliasResult> InvokeAsync(GetServerDnsAliasArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServerDnsAliasResult>("azure-nextgen:sql/v20200801preview:getServerDnsAlias", args ?? new GetServerDnsAliasArgs(), options.WithVersion());
    }


    public sealed class GetServerDnsAliasArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the server dns alias.
        /// </summary>
        [Input("dnsAliasName", required: true)]
        public string DnsAliasName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server that the alias is pointing to.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetServerDnsAliasArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServerDnsAliasResult
    {
        /// <summary>
        /// The fully qualified DNS record for alias
        /// </summary>
        public readonly string AzureDnsRecord;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetServerDnsAliasResult(
            string azureDnsRecord,

            string id,

            string name,

            string type)
        {
            AzureDnsRecord = azureDnsRecord;
            Id = id;
            Name = name;
            Type = type;
        }
    }
}
