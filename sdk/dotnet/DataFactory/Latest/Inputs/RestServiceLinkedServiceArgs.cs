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
    /// Rest Service linked service.
    /// </summary>
    public sealed class RestServiceLinkedServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The resource you are requesting authorization to use.
        /// </summary>
        [Input("aadResourceId")]
        public Input<object>? AadResourceId { get; set; }

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
        /// Type of authentication used to connect to the REST service.
        /// </summary>
        [Input("authenticationType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.Latest.RestServiceAuthenticationType> AuthenticationType { get; set; } = null!;

        /// <summary>
        /// Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("azureCloudType")]
        public Input<object>? AzureCloudType { get; set; }

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
        /// Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean).
        /// </summary>
        [Input("enableServerCertificateValidation")]
        public Input<object>? EnableServerCertificateValidation { get; set; }

        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("encryptedCredential")]
        public Input<object>? EncryptedCredential { get; set; }

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
        /// The password used in Basic authentication type.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        /// <summary>
        /// The application's client ID used in AadServicePrincipal authentication type.
        /// </summary>
        [Input("servicePrincipalId")]
        public Input<object>? ServicePrincipalId { get; set; }

        /// <summary>
        /// The application's key used in AadServicePrincipal authentication type.
        /// </summary>
        [Input("servicePrincipalKey")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ServicePrincipalKey { get; set; }

        /// <summary>
        /// The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides.
        /// </summary>
        [Input("tenant")]
        public Input<object>? Tenant { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'RestService'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// The base URL of the REST service.
        /// </summary>
        [Input("url", required: true)]
        public Input<object> Url { get; set; } = null!;

        /// <summary>
        /// The user name used in Basic authentication type.
        /// </summary>
        [Input("userName")]
        public Input<object>? UserName { get; set; }

        public RestServiceLinkedServiceArgs()
        {
        }
    }
}
