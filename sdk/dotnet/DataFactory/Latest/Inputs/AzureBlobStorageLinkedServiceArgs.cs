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
    /// The azure blob storage linked service.
    /// </summary>
    public sealed class AzureBlobStorageLinkedServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Azure key vault secret reference of accountKey in connection string.
        /// </summary>
        [Input("accountKey")]
        public Input<Inputs.AzureKeyVaultSecretReferenceArgs>? AccountKey { get; set; }

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
        /// The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
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
        public Input<string>? EncryptedCredential { get; set; }

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
        /// The Azure key vault secret reference of sasToken in sas uri.
        /// </summary>
        [Input("sasToken")]
        public Input<Inputs.AzureKeyVaultSecretReferenceArgs>? SasToken { get; set; }

        /// <summary>
        /// SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference.
        /// </summary>
        [Input("sasUri")]
        public Input<object>? SasUri { get; set; }

        /// <summary>
        /// Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property.
        /// </summary>
        [Input("serviceEndpoint")]
        public Input<string>? ServiceEndpoint { get; set; }

        /// <summary>
        /// The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("servicePrincipalId")]
        public Input<object>? ServicePrincipalId { get; set; }

        /// <summary>
        /// The key of the service principal used to authenticate against Azure SQL Data Warehouse.
        /// </summary>
        [Input("servicePrincipalKey")]
        public InputUnion<Inputs.AzureKeyVaultSecretReferenceArgs, Inputs.SecureStringArgs>? ServicePrincipalKey { get; set; }

        /// <summary>
        /// The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("tenant")]
        public Input<object>? Tenant { get; set; }

        /// <summary>
        /// Type of linked service.
        /// Expected value is 'AzureBlobStorage'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public AzureBlobStorageLinkedServiceArgs()
        {
        }
    }
}
