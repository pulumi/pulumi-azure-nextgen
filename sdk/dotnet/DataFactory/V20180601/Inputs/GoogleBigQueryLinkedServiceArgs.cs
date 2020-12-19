// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Inputs
{

    /// <summary>
    /// Google BigQuery service linked service.
    /// </summary>
    public sealed class GoogleBigQueryLinkedServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A comma-separated list of public BigQuery projects to access.
        /// </summary>
        [Input("additionalProjects")]
        public Input<object>? AdditionalProjects { get; set; }

        [Input("annotations")]
        private InputList<object>? _annotations;

        /// <summary>
        /// List of tags that can be used for describing the linked service.
        /// </summary>
        public InputList<object> Annotations
        {
            get => _annotations ?? (_annotations = new InputList<object>());
            set => _annotations = value;
        }

        /// <summary>
        /// The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
        /// </summary>
        [Input("authenticationType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20180601.GoogleBigQueryAuthenticationType> AuthenticationType { get; set; } = null!;

        /// <summary>
        /// The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("clientId")]
        public Input<object>? ClientId { get; set; }

        /// <summary>
        /// The client secret of the google application used to acquire the refresh token.
        /// </summary>
        [Input("clientSecret")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ClientSecret { get; set; }

        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        [Input("connectVia")]
        public Input<Inputs.IntegrationRuntimeReferenceArgs>? ConnectVia { get; set; }

        /// <summary>
        /// Linked service description.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR.
        /// </summary>
        [Input("email")]
        public Input<object>? Email { get; set; }

        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("encryptedCredential")]
        public Input<object>? EncryptedCredential { get; set; }

        /// <summary>
        /// The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR.
        /// </summary>
        [Input("keyFilePath")]
        public Input<object>? KeyFilePath { get; set; }

        [Input("parameters")]
        private InputMap<Inputs.ParameterSpecificationArgs>? _parameters;

        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public InputMap<Inputs.ParameterSpecificationArgs> Parameters
        {
            get => _parameters ?? (_parameters = new InputMap<Inputs.ParameterSpecificationArgs>());
            set => _parameters = value;
        }

        /// <summary>
        /// The default BigQuery project to query against.
        /// </summary>
        [Input("project", required: true)]
        public Input<object> Project { get; set; } = null!;

        /// <summary>
        /// The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication.
        /// </summary>
        [Input("refreshToken")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? RefreshToken { get; set; }

        /// <summary>
        /// Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false.
        /// </summary>
        [Input("requestGoogleDriveScope")]
        public Input<object>? RequestGoogleDriveScope { get; set; }

        /// <summary>
        /// The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
        /// </summary>
        [Input("trustedCertPath")]
        public Input<object>? TrustedCertPath { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'GoogleBigQuery'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
        /// </summary>
        [Input("useSystemTrustStore")]
        public Input<object>? UseSystemTrustStore { get; set; }

        public GoogleBigQueryLinkedServiceArgs()
        {
        }
    }
}
