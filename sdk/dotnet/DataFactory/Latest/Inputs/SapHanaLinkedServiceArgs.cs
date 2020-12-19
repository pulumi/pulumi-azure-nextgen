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
    /// SAP HANA Linked Service.
    /// </summary>
    public sealed class SapHanaLinkedServiceArgs : Pulumi.ResourceArgs
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
        /// The authentication type to be used to connect to the SAP HANA server.
        /// </summary>
        [Input("authenticationType")]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.Latest.SapHanaAuthenticationType>? AuthenticationType { get; set; }

        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        [Input("connectVia")]
        public Input<Inputs.IntegrationRuntimeReferenceArgs>? ConnectVia { get; set; }

        /// <summary>
        /// SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference.
        /// </summary>
        [Input("connectionString")]
        public Input<object>? ConnectionString { get; set; }

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
        /// Password to access the SAP HANA server.
        /// </summary>
        [Input("password")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? Password { get; set; }

        /// <summary>
        /// Host name of the SAP HANA server. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("server")]
        public Input<object>? Server { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'SapHana'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// Username to access the SAP HANA server. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("userName")]
        public Input<object>? UserName { get; set; }

        public SapHanaLinkedServiceArgs()
        {
        }
    }
}
