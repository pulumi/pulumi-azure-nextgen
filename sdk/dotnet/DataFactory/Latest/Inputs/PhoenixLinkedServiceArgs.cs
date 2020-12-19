// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Inputs
{

    /// <summary>
    /// Phoenix server linked service.
    /// </summary>
    public sealed class PhoenixLinkedServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false.
        /// </summary>
        [Input("allowHostNameCNMismatch")]
        public Input<object>? AllowHostNameCNMismatch { get; set; }

        /// <summary>
        /// Specifies whether to allow self-signed certificates from the server. The default value is false.
        /// </summary>
        [Input("allowSelfSignedServerCert")]
        public Input<object>? AllowSelfSignedServerCert { get; set; }

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
        /// The authentication mechanism used to connect to the Phoenix server.
        /// </summary>
        [Input("authenticationType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.Latest.PhoenixAuthenticationType> AuthenticationType { get; set; } = null!;

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
        /// Specifies whether the connections to the server are encrypted using SSL. The default value is false.
        /// </summary>
        [Input("enableSsl")]
        public Input<object>? EnableSsl { get; set; }

        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("encryptedCredential")]
        public Input<object>? EncryptedCredential { get; set; }

        /// <summary>
        /// The IP address or host name of the Phoenix server. (i.e. 192.168.222.160)
        /// </summary>
        [Input("host", required: true)]
        public Input<object> Host { get; set; } = null!;

        /// <summary>
        /// The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService.
        /// </summary>
        [Input("httpPath")]
        public Input<object>? HttpPath { get; set; }

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
        /// The password corresponding to the user name.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        /// <summary>
        /// The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765.
        /// </summary>
        [Input("port")]
        public Input<object>? Port { get; set; }

        /// <summary>
        /// The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
        /// </summary>
        [Input("trustedCertPath")]
        public Input<object>? TrustedCertPath { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'Phoenix'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
        /// </summary>
        [Input("useSystemTrustStore")]
        public Input<object>? UseSystemTrustStore { get; set; }

        /// <summary>
        /// The user name used to connect to the Phoenix server.
        /// </summary>
        [Input("username")]
        public Input<object>? Username { get; set; }

        public PhoenixLinkedServiceArgs()
        {
        }
    }
}
