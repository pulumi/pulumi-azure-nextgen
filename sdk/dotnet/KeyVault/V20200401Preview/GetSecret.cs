// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.KeyVault.V20200401Preview
{
    public static class GetSecret
    {
        public static Task<GetSecretResult> InvokeAsync(GetSecretArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSecretResult>("azure-nextgen:keyvault/v20200401preview:getSecret", args ?? new GetSecretArgs(), options.WithVersion());
    }


    public sealed class GetSecretArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Resource Group to which the vault belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the secret.
        /// </summary>
        [Input("secretName", required: true)]
        public string SecretName { get; set; } = null!;

        /// <summary>
        /// The name of the vault.
        /// </summary>
        [Input("vaultName", required: true)]
        public string VaultName { get; set; } = null!;

        public GetSecretArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSecretResult
    {
        /// <summary>
        /// Fully qualified identifier of the key vault resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Azure location of the key vault resource.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Name of the key vault resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Properties of the secret
        /// </summary>
        public readonly Outputs.SecretPropertiesResponse Properties;
        /// <summary>
        /// Tags assigned to the key vault resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Tags;
        /// <summary>
        /// Resource type of the key vault resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetSecretResult(
            string id,

            string location,

            string name,

            Outputs.SecretPropertiesResponse properties,

            ImmutableDictionary<string, string> tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Tags = tags;
            Type = type;
        }
    }
}
