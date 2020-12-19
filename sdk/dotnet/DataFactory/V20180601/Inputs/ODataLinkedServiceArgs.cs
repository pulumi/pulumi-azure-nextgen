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
    /// Open Data Protocol (OData) linked service.
    /// </summary>
    public sealed class ODataLinkedServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("aadResourceId")]
        public Input<object>? AadResourceId { get; set; }

        /// <summary>
        /// Specify the credential type (key or cert) is used for service principal.
        /// </summary>
        [Input("aadServicePrincipalCredentialType")]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20180601.ODataAadServicePrincipalCredentialType>? AadServicePrincipalCredentialType { get; set; }

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
        /// Type of authentication used to connect to the OData service.
        /// </summary>
        [Input("authenticationType")]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20180601.ODataAuthenticationType>? AuthenticationType { get; set; }

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
        /// Password of the OData service.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        /// <summary>
        /// Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("servicePrincipalEmbeddedCert")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ServicePrincipalEmbeddedCert { get; set; }

        /// <summary>
        /// Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("servicePrincipalEmbeddedCertPassword")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ServicePrincipalEmbeddedCertPassword { get; set; }

        /// <summary>
        /// Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("servicePrincipalId")]
        public Input<object>? ServicePrincipalId { get; set; }

        /// <summary>
        /// Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("servicePrincipalKey")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ServicePrincipalKey { get; set; }

        /// <summary>
        /// Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("tenant")]
        public Input<object>? Tenant { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'OData'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// The URL of the OData service endpoint. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("url", required: true)]
        public Input<object> Url { get; set; } = null!;

        /// <summary>
        /// User name of the OData service. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("userName")]
        public Input<object>? UserName { get; set; }

        public ODataLinkedServiceArgs()
        {
        }
    }
}
