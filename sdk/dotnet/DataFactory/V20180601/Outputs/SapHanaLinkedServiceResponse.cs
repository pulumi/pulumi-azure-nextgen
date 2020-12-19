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
    public sealed class SapHanaLinkedServiceResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the linked service.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// The authentication type to be used to connect to the SAP HANA server.
        /// </summary>
        public readonly string? AuthenticationType;
        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeReferenceResponse? ConnectVia;
        /// <summary>
        /// SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
        /// </summary>
        public readonly object? ConnectionString;
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
        /// Password to access the SAP HANA server.
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? Password;
        /// <summary>
        /// Host name of the SAP HANA server. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? Server;
        /// <summary>
        /// Type of linked service.
        /// Expected value is 'SapHana'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Username to access the SAP HANA server. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? UserName;

        [OutputConstructor]
        private SapHanaLinkedServiceResponse(
            ImmutableArray<object> annotations,

            string? authenticationType,

            Outputs.IntegrationRuntimeReferenceResponse? connectVia,

            object? connectionString,

            string? description,

            object? encryptedCredential,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? password,

            object? server,

            string type,

            object? userName)
        {
            Annotations = annotations;
            AuthenticationType = authenticationType;
            ConnectVia = connectVia;
            ConnectionString = connectionString;
            Description = description;
            EncryptedCredential = encryptedCredential;
            Parameters = parameters;
            Password = password;
            Server = server;
            Type = type;
            UserName = userName;
        }
    }
}
