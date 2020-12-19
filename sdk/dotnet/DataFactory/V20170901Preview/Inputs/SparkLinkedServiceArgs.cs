// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Inputs
{

    /// <summary>
    /// Spark Server linked service.
    /// </summary>
    public sealed class SparkLinkedServiceArgs : Pulumi.ResourceArgs
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
        /// List of tags that can be used for describing the Dataset.
        /// </summary>
        public InputList<object> Annotations
        {
            get => _annotations ?? (_annotations = new InputList<object>());
            set => _annotations = value;
        }

        /// <summary>
        /// The authentication method used to access the Spark server.
        /// </summary>
        [Input("authenticationType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20170901Preview.SparkAuthenticationType> AuthenticationType { get; set; } = null!;

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
        /// IP address or host name of the Spark server
        /// </summary>
        [Input("host", required: true)]
        public Input<object> Host { get; set; } = null!;

        /// <summary>
        /// The partial URL corresponding to the Spark server.
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
        /// The password corresponding to the user name that you provided in the Username field
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        /// <summary>
        /// The TCP port that the Spark server uses to listen for client connections.
        /// </summary>
        [Input("port", required: true)]
        public Input<object> Port { get; set; } = null!;

        /// <summary>
        /// The type of Spark server.
        /// </summary>
        [Input("serverType")]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20170901Preview.SparkServerType>? ServerType { get; set; }

        /// <summary>
        /// The transport protocol to use in the Thrift layer.
        /// </summary>
        [Input("thriftTransportProtocol")]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20170901Preview.SparkThriftTransportProtocol>? ThriftTransportProtocol { get; set; }

        /// <summary>
        /// The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR.
        /// </summary>
        [Input("trustedCertPath")]
        public Input<object>? TrustedCertPath { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'Spark'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false.
        /// </summary>
        [Input("useSystemTrustStore")]
        public Input<object>? UseSystemTrustStore { get; set; }

        /// <summary>
        /// The user name that you use to access Spark Server.
        /// </summary>
        [Input("username")]
        public Input<object>? Username { get; set; }

        public SparkLinkedServiceArgs()
        {
        }
    }
}
