// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Outputs
{

    [OutputType]
    public sealed class AmazonMWSLinkedServiceResponse
    {
        /// <summary>
        /// The access key id used to access data.
        /// </summary>
        public readonly object AccessKeyId;
        /// <summary>
        /// List of tags that can be used for describing the Dataset.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeReferenceResponse? ConnectVia;
        /// <summary>
        /// Linked service description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? EncryptedCredential;
        /// <summary>
        /// The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com)
        /// </summary>
        public readonly object Endpoint;
        /// <summary>
        /// The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2)
        /// </summary>
        public readonly object MarketplaceID;
        /// <summary>
        /// The Amazon MWS authentication token.
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? MwsAuthToken;
        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// The secret key used to access data.
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? SecretKey;
        /// <summary>
        /// The Amazon seller ID.
        /// </summary>
        public readonly object SellerID;
        /// <summary>
        /// Type of linked service.
        /// Expected value is 'AmazonMWS'.
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
        private AmazonMWSLinkedServiceResponse(
            object accessKeyId,

            ImmutableArray<object> annotations,

            Outputs.IntegrationRuntimeReferenceResponse? connectVia,

            string? description,

            object? encryptedCredential,

            object endpoint,

            object marketplaceID,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? mwsAuthToken,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse>? secretKey,

            object sellerID,

            string type,

            object? useEncryptedEndpoints,

            object? useHostVerification,

            object? usePeerVerification)
        {
            AccessKeyId = accessKeyId;
            Annotations = annotations;
            ConnectVia = connectVia;
            Description = description;
            EncryptedCredential = encryptedCredential;
            Endpoint = endpoint;
            MarketplaceID = marketplaceID;
            MwsAuthToken = mwsAuthToken;
            Parameters = parameters;
            SecretKey = secretKey;
            SellerID = sellerID;
            Type = type;
            UseEncryptedEndpoints = useEncryptedEndpoints;
            UseHostVerification = useHostVerification;
            UsePeerVerification = usePeerVerification;
        }
    }
}
