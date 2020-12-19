// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Outputs
{

    [OutputType]
    public sealed class SquareLinkedServiceResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the linked service.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// The client ID associated with your Square application.
        /// </summary>
        public readonly object? ClientId;
        /// <summary>
        /// The client secret associated with your Square application.
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? ClientSecret;
        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeReferenceResponse? ConnectVia;
        /// <summary>
        /// Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object.
        /// </summary>
        public readonly object? ConnectionProperties;
        /// <summary>
        /// Linked service description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? EncryptedCredential;
        /// <summary>
        /// The URL of the Square instance. (i.e. mystore.mysquare.com)
        /// </summary>
        public readonly object? Host;
        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500)
        /// </summary>
        public readonly object? RedirectUri;
        /// <summary>
        /// Type of linked service.
        /// Expected value is 'Square'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true.
        /// </summary>
        public readonly object? UseEncryptedEndpoints;
        /// <summary>
        /// Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true.
        /// </summary>
        public readonly object? UseHostVerification;
        /// <summary>
        /// Specifies whether to verify the identity of the server when connecting over SSL. The default value is true.
        /// </summary>
        public readonly object? UsePeerVerification;

        [OutputConstructor]
        private SquareLinkedServiceResponse(
            ImmutableArray<object> annotations,

            object? clientId,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? clientSecret,

            Outputs.IntegrationRuntimeReferenceResponse? connectVia,

            object? connectionProperties,

            string? description,

            object? encryptedCredential,

            object? host,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            object? redirectUri,

            string type,

            object? useEncryptedEndpoints,

            object? useHostVerification,

            object? usePeerVerification)
        {
            Annotations = annotations;
            ClientId = clientId;
            ClientSecret = clientSecret;
            ConnectVia = connectVia;
            ConnectionProperties = connectionProperties;
            Description = description;
            EncryptedCredential = encryptedCredential;
            Host = host;
            Parameters = parameters;
            RedirectUri = redirectUri;
            Type = type;
            UseEncryptedEndpoints = useEncryptedEndpoints;
            UseHostVerification = useHostVerification;
            UsePeerVerification = usePeerVerification;
        }
    }
}
