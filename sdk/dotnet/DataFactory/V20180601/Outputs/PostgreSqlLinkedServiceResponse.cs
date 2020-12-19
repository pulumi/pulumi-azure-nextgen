// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class PostgreSqlLinkedServiceResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the linked service.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeReferenceResponse? ConnectVia;
        /// <summary>
        /// The connection string.
        /// </summary>
        public readonly object ConnectionString;
        /// <summary>
        /// Linked service description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? EncryptedCredential;
        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// The Azure key vault secret reference of password in connection string.
        /// </summary>
        public readonly Outputs.AzureKeyVaultSecretReferenceResponse? Password;
        /// <summary>
        /// Type of linked service.
        /// Expected value is 'PostgreSql'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private PostgreSqlLinkedServiceResponse(
            ImmutableArray<object> annotations,

            Outputs.IntegrationRuntimeReferenceResponse? connectVia,

            object connectionString,

            string? description,

            object? encryptedCredential,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            Outputs.AzureKeyVaultSecretReferenceResponse? password,

            string type)
        {
            Annotations = annotations;
            ConnectVia = connectVia;
            ConnectionString = connectionString;
            Description = description;
            EncryptedCredential = encryptedCredential;
            Parameters = parameters;
            Password = password;
            Type = type;
        }
    }
}
