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
    /// Dynamics linked service.
    /// </summary>
    public sealed class DynamicsLinkedServiceArgs : Pulumi.ResourceArgs
    {
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
        /// The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("authenticationType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20180601.DynamicsAuthenticationType> AuthenticationType { get; set; } = null!;

        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        [Input("connectVia")]
        public Input<Inputs.IntegrationRuntimeReferenceArgs>? ConnectVia { get; set; }

        /// <summary>
        /// The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("deploymentType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20180601.DynamicsDeploymentType> DeploymentType { get; set; } = null!;

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

        /// <summary>
        /// The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("hostName")]
        public Input<object>? HostName { get; set; }

        /// <summary>
        /// The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("organizationName")]
        public Input<object>? OrganizationName { get; set; }

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
        /// Password to access the Dynamics instance.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        /// <summary>
        /// The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0.
        /// </summary>
        [Input("port")]
        public Input<object>? Port { get; set; }

        /// <summary>
        /// The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference.
        /// </summary>
        [Input("servicePrincipalCredential")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ServicePrincipalCredential { get; set; }

        /// <summary>
        /// The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("servicePrincipalCredentialType")]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20180601.DynamicsServicePrincipalCredentialType>? ServicePrincipalCredentialType { get; set; }

        /// <summary>
        /// The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("servicePrincipalId")]
        public Input<object>? ServicePrincipalId { get; set; }

        /// <summary>
        /// The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("serviceUri")]
        public Input<object>? ServiceUri { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'Dynamics'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// User name to access the Dynamics instance. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("username")]
        public Input<object>? Username { get; set; }

        public DynamicsLinkedServiceArgs()
        {
        }
    }
}
