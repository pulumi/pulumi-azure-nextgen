// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.V20200101
{
    public static class GetServerKey
    {
        public static Task<GetServerKeyResult> InvokeAsync(GetServerKeyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServerKeyResult>("azure-nextgen:dbforpostgresql/v20200101:getServerKey", args ?? new GetServerKeyArgs(), options.WithVersion());
    }


    public sealed class GetServerKeyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the PostgreSQL Server key to be retrieved.
        /// </summary>
        [Input("keyName", required: true)]
        public string KeyName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetServerKeyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServerKeyResult
    {
        /// <summary>
        /// The key creation date.
        /// </summary>
        public readonly string CreationDate;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of encryption protector used to protect the key.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The key type like 'AzureKeyVault'.
        /// </summary>
        public readonly string ServerKeyType;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The URI of the key.
        /// </summary>
        public readonly string? Uri;

        [OutputConstructor]
        private GetServerKeyResult(
            string creationDate,

            string id,

            string kind,

            string name,

            string serverKeyType,

            string type,

            string? uri)
        {
            CreationDate = creationDate;
            Id = id;
            Kind = kind;
            Name = name;
            ServerKeyType = serverKeyType;
            Type = type;
            Uri = uri;
        }
    }
}
